import { Modules } from '@medusajs/utils';

const {
  ADMIN_CORS,
  AUTH_CORS,
  BACKEND_URL,
  COOKIE_SECRET,
  DATABASE_URL,
  JWT_SECRET,
  REDIS_URL,
  RESEND_API_KEY,
  RESEND_FROM_EMAIL,
  SENDGRID_API_KEY,
  SENDGRID_FROM_EMAIL,
  SHOULD_DISABLE_ADMIN,
  STORE_CORS,
  STRIPE_API_KEY,
  STRIPE_WEBHOOK_SECRET,
  WORKER_MODE,
  MINIO_ENDPOINT,
  MINIO_ACCESS_KEY,
  MINIO_SECRET_KEY,
  MINIO_BUCKET,
  MEILISEARCH_HOST,
  MEILISEARCH_ADMIN_KEY
} = process.env;

const medusaConfig = {
  projectConfig: {
    databaseUrl: DATABASE_URL,
    http: {
      storeCors: STORE_CORS,
      adminCors: ADMIN_CORS,
      authCors: AUTH_CORS,
      jwtSecret: JWT_SECRET,
      cookieSecret: COOKIE_SECRET
    },
    workerMode: WORKER_MODE === 'shared' ? 'shared' : 'worker',
    ...(SHOULD_DISABLE_ADMIN === 'true' && { admin: { disable: true } })
  },
  modules: [
    {
      key: Modules.FILE,
      resolve: '@medusajs/file',
      options: {
        providers: MINIO_ENDPOINT && MINIO_ACCESS_KEY && MINIO_SECRET_KEY ? [
          {
            resolve: './src/modules/minio-file',
            id: 'minio',
            options: {
              endPoint: MINIO_ENDPOINT,
              accessKey: MINIO_ACCESS_KEY,
              secretKey: MINIO_SECRET_KEY,
              bucket: MINIO_BUCKET
            }
          }
        ] : [
          {
            resolve: '@medusajs/file-local',
            id: 'local',
            options: {
              upload_dir: 'static',
              backend_url: `${BACKEND_URL}/static`
            }
          }
        ]
      }
    }
  ]
};

// Add Redis modules only if REDIS_URL exists
if (REDIS_URL) {
  medusaConfig.modules.push(
    {
      key: Modules.EVENT_BUS,
      resolve: '@medusajs/event-bus-redis',
      options: {
        redisUrl: REDIS_URL
      }
    },
    {
      key: Modules.WORKFLOW_ENGINE,
      resolve: '@medusajs/workflow-engine-redis',
      options: {
        redis: { url: REDIS_URL },
        timeout: 300000,
        retryDelay: 5000,
        maxRetries: 3
      }
    }
  );
}

// Add notification modules only if email providers exist
if ((SENDGRID_API_KEY && SENDGRID_FROM_EMAIL) || (RESEND_API_KEY && RESEND_FROM_EMAIL)) {
  const notificationProviders = [];
  
  if (SENDGRID_API_KEY && SENDGRID_FROM_EMAIL) {
    notificationProviders.push({
      resolve: '@medusajs/notification-sendgrid',
      id: 'sendgrid',
      options: {
        channels: ['email', 'feed'],
        api_key: SENDGRID_API_KEY,
        from: SENDGRID_FROM_EMAIL
      }
    });
  }
  
  if (RESEND_API_KEY && RESEND_FROM_EMAIL) {
    notificationProviders.push({
      resolve: './src/modules/email-notifications',
      id: 'resend',
      options: {
        channels: ['email', 'feed'],
        api_key: RESEND_API_KEY,
        from: RESEND_FROM_EMAIL
      }
    });
  }
  
  medusaConfig.modules.push({
    key: Modules.NOTIFICATION,
    resolve: '@medusajs/notification',
    options: {
      providers: notificationProviders
    }
  });
}

// Add payment module only if Stripe is configured
if (STRIPE_API_KEY && STRIPE_WEBHOOK_SECRET) {
  medusaConfig.modules.push({
    key: Modules.PAYMENT,
    resolve: '@medusajs/payment',
    options: {
      providers: [
        {
          resolve: '@medusajs/payment-stripe',
          id: 'stripe',
          options: {
            apiKey: STRIPE_API_KEY,
            webhookSecret: STRIPE_WEBHOOK_SECRET
          }
        }
      ]
    }
  });
}

// Add fulfillment module
medusaConfig.modules.push({
  key: Modules.FULFILLMENT,
  resolve: '@medusajs/fulfillment',
  options: {
    providers: [
      {
        resolve: '@medusajs/fulfillment-manual',
        id: 'manual'
      }
    ]
  }
});

// Add plugins
medusaConfig.plugins = [];

if (MEILISEARCH_HOST && MEILISEARCH_ADMIN_KEY) {
  medusaConfig.plugins.push({
    resolve: '@rokmohar/medusa-plugin-meilisearch',
    options: {
      config: {
        host: MEILISEARCH_HOST,
        apiKey: MEILISEARCH_ADMIN_KEY
      },
      settings: {
        products: {
          type: 'products',
          enabled: true,
          fields: ['id', 'title', 'description', 'handle', 'variant_sku', 'thumbnail'],
          indexSettings: {
            searchableAttributes: ['title', 'description', 'variant_sku'],
            displayedAttributes: ['id', 'handle', 'title', 'description', 'variant_sku', 'thumbnail'],
            filterableAttributes: ['id', 'handle']
          },
          primaryKey: 'id'
        }
      }
    }
  });
}

export default medusaConfig;
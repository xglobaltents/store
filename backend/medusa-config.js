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

export default {
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
    admin: SHOULD_DISABLE_ADMIN === 'true' ? { disable: true } : {}
  },
  modules: {
    [Modules.FILE]: {
      resolve: '@medusajs/file',
      options: {
        providers: [
          {
            resolve: MINIO_ENDPOINT ? './src/modules/minio-file' : '@medusajs/file-local',
            id: MINIO_ENDPOINT ? 'minio' : 'local',
            options: MINIO_ENDPOINT ? {
              endPoint: MINIO_ENDPOINT,
              accessKey: MINIO_ACCESS_KEY,
              secretKey: MINIO_SECRET_KEY,
              bucket: MINIO_BUCKET
            } : {
              upload_dir: 'static',
              backend_url: `${BACKEND_URL}/static`
            }
          }
        ]
      }
    },
    [Modules.EVENT_BUS]: REDIS_URL ? {
      resolve: '@medusajs/event-bus-redis',
      options: {
        redisUrl: REDIS_URL
      }
    } : undefined,
    [Modules.WORKFLOW_ENGINE]: REDIS_URL ? {
      resolve: '@medusajs/workflow-engine-redis',
      options: {
        redis: { url: REDIS_URL },
        timeout: 300000,
        retryDelay: 5000,
        maxRetries: 3
      }
    } : undefined,
    [Modules.NOTIFICATION]: (SENDGRID_API_KEY || RESEND_API_KEY) ? {
      resolve: '@medusajs/notification',
      options: {
        providers: [
          ...(SENDGRID_API_KEY ? [{
            resolve: '@medusajs/notification-sendgrid',
            id: 'sendgrid',
            options: {
              channels: ['email'],
              api_key: SENDGRID_API_KEY,
              from: SENDGRID_FROM_EMAIL
            }
          }] : []),
          ...(RESEND_API_KEY ? [{
            resolve: './src/modules/email-notifications',
            id: 'resend',
            options: {
              channels: ['email'],
              api_key: RESEND_API_KEY,
              from: RESEND_FROM_EMAIL
            }
          }] : [])
        ]
      }
    } : undefined,
    [Modules.PAYMENT]: STRIPE_API_KEY ? {
      resolve: '@medusajs/payment',
      options: {
        providers: [{
          resolve: '@medusajs/payment-stripe',
          id: 'stripe',
          options: {
            apiKey: STRIPE_API_KEY,
            webhookSecret: STRIPE_WEBHOOK_SECRET
          }
        }]
      }
    } : undefined,
    [Modules.FULFILLMENT]: {
      resolve: '@medusajs/fulfillment',
      options: {
        providers: [{
          resolve: '@medusajs/fulfillment-manual',
          id: 'manual'
        }]
      }
    }
  },
  plugins: [
    ...(MEILISEARCH_HOST ? [{
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
    }] : [])
  ]
}
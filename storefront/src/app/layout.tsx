import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import Script from "next/script"
import "styles/globals.css"
import "./styles.css"
import type { Viewport } from 'next'
import SEOWrapper from "@modules/common/components/seo-wrapper"
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

// Define organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://xglobaltents.com",
  logo: "/logos/logo.webp",
  name: "xGlobal Tents",
  legalName: "xGlobal Tents Limited",
  telephone: "+971-04-836-9499",
  sameAs: ["https://www.linkedin.com/company/xglobal-tents/"]
}

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    template: '%s | xGlobal Tents',
    default: 'xGlobal Tents - Premium Quality Tents',
  },
  description: 'Premium quality tents for every occasion',
  other: {
    'script:ld+json': [JSON.stringify(organizationJsonLd)]
  }
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-55B7X2DR"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-55B7X2DR');
          `}
        </Script>
        <main 
          className="relative" 
          style={{ 
            isolation: 'isolate',
            position: 'relative',
            zIndex: 1
          }}
        >
          <SEOWrapper>
            {props.children}
          </SEOWrapper>
        </main>
        <div id="modal-root" style={{ position: 'relative', zIndex: 50 }} />
      </body>
    </html>
  )
}

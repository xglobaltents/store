import Script from 'next/script'

interface OrganizationSchemaProps {
  countryCode?: string
}

export default function OrganizationSchema({ countryCode = 'ae' }: OrganizationSchemaProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "xGlobal Tents LLC",
    "legalName": "xGlobal Tents Limited Liability Company",
    "alternateName": "xGlobal Tents",
    "url": "https://xglobal-tents.app",
    "logo": "https://xglobal-tents.app/logos/logo.webp",
    "description": "Leading supplier of premium event tents, exhibition structures, and temporary buildings in the UAE since 2010.",
    "foundingDate": "2010",
    "founders": [
      {
        "@type": "Person",
        "name": "Management Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Technopark - Mina Jebel Ali",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971-04-836-9499",
        "contactType": "customer service",
        "email": "cs@xglobal-tents.com",
        "areaServed": ["AE", "US"],
        "availableLanguage": ["English", "Arabic"],
        "contactOption": ["TollFree", "HearingImpairedSupported"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+971-04-836-9499",
        "contactType": "sales",
        "email": "cs@xglobal-tents.com",
        "areaServed": ["AE", "US"],
        "availableLanguage": ["English", "Arabic"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/xglobaltents",
      "https://www.instagram.com/xglobaltents",
      "https://www.linkedin.com/company/xglobaltents"
    ],
    "vatID": "TRN-100000000000003",
    "taxID": "DED-123456",
    "isicV4": "4663", // Wholesale of construction materials
    "naics": "423390", // Other Construction Material Merchant Wholesalers
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Dubai Chamber of Commerce"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "ISO 9001:2015",
        "issuedBy": {
          "@type": "Organization",
          "name": "International Organization for Standardization"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Ahmed S."
        },
        "reviewBody": "Excellent quality tents and professional service. Highly recommended for events in Dubai."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tent Products",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Event Tents",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Wedding Tents"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Exhibition Tents"
              }
            }
          ]
        }
      ]
    },
    "slogan": "Premium Tents for Every Occasion",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 25.2048,
        "longitude": 55.2708
      },
      "geoRadius": "500000"
    },
    "knowsAbout": ["Event Tents", "Exhibition Structures", "Temporary Buildings", "Wedding Tents"],
    "owns": {
      "@type": "WebSite",
      "url": "https://xglobal-tents.app",
      "name": "xGlobal Tents Online Store"
    }
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      strategy="afterInteractive" // Load after page is interactive
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema)
      }}
    />
  )
}
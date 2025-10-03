import Script from 'next/script'

interface StoreRatingSchemaProps {
  storeName: string
  rating: number
  reviewCount: number
  address?: {
    street: string
    city: string
    country: string
    postalCode?: string
  }
  phone?: string
  email?: string
  countryCode?: string
}

export default function StoreRatingSchema({ 
  storeName, 
  rating, 
  reviewCount, 
  address,
  phone = "+971-04-836-9499",
  email = "cs@xglobal-tents.com",
  countryCode = "ae"
}: StoreRatingSchemaProps) {
  const defaultAddress = {
    street: "Technopark - Mina Jebel Ali",
    city: "Dubai", 
    country: "United Arab Emirates",
    postalCode: ""
  }

  const storeAddress = address || defaultAddress

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": storeName,
    "image": "https://xglobal-tents.app/logos/logo.webp",
    "telephone": phone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": storeAddress.street,
      "addressLocality": storeAddress.city,
      "addressCountry": storeAddress.country,
      ...(storeAddress.postalCode && { "postalCode": storeAddress.postalCode })
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    "openingHours": "Mo-Th 09:00-18:00",
    "currenciesAccepted": countryCode === "ae" ? "AED" : "USD",
    "priceRange": "$$"
  }

  return (
    <Script
      id="store-rating-schema"
      type="application/ld+json"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema)
      }}
    />
  )
}
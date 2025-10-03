import Script from 'next/script'
import { HttpTypes } from '@medusajs/types'

interface ProductRatingSchemaProps {
  product: HttpTypes.StoreProduct
  rating?: number
  reviewCount?: number
  baseUrl?: string
  region?: HttpTypes.StoreRegion
}

export default function ProductRatingSchema({ 
  product, 
  rating = 4.5, 
  reviewCount = 10,
  baseUrl = "https://xglobal-tents.app",
  region
}: ProductRatingSchemaProps) {
  // Get the cheapest variant price
  const cheapestVariant = product.variants?.reduce((prev, current) => {
    const prevPrice = prev.calculated_price?.calculated_amount || 0
    const currentPrice = current.calculated_price?.calculated_amount || 0
    return prevPrice < currentPrice ? prev : current
  })

  const price = cheapestVariant?.calculated_price?.calculated_amount || 0
  const currencyCode = region?.currency_code || 'AED'
  
  // Convert from smallest unit (fils) to standard unit
  const displayPrice = currencyCode === 'AED' ? price / 100 : price / 100

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description || `High-quality ${product.title} from xGlobal Tents`,
    "image": product.thumbnail ? `${baseUrl}${product.thumbnail}` : `${baseUrl}/logos/logo.webp`,
    "brand": {
      "@type": "Brand",
      "name": "xGlobal Tents"
    },
    "sku": product.handle,
    "offers": {
      "@type": "Offer",
      "price": displayPrice.toFixed(2),
      "priceCurrency": currencyCode,
      "availability": product.status === 'published' ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "xGlobal Tents"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    "category": product.categories?.[0]?.name || "Tents",
    "url": `${baseUrl}/products/${product.handle}`
  }

  return (
    <Script
      id={`product-rating-schema-${product.id}`}
      type="application/ld+json"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema)
      }}
    />
  )
}
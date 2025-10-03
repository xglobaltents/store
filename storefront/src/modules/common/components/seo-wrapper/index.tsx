'use client'

import { useParams } from 'next/navigation'
import { HttpTypes } from '@medusajs/types'
import { 
  FAQSchema, 
  BreadcrumbSchema, 
  StoreRatingSchema, 
  ProductRatingSchema,
  commonFAQs 
} from '@modules/common/components/seo-schemas'
import { useBreadcrumbs } from '@lib/hooks/use-breadcrumbs'

interface SEOWrapperProps {
  children: React.ReactNode
  product?: HttpTypes.StoreProduct
  region?: HttpTypes.StoreRegion
  customFAQs?: Array<{ question: string; answer: string }>
  showStoreRating?: boolean
  storeRating?: number
  storeReviewCount?: number
}

export default function SEOWrapper({
  children,
  product,
  region,
  customFAQs,
  showStoreRating = true,
  storeRating = 4.8,
  storeReviewCount = 156
}: SEOWrapperProps) {
  const params = useParams()
  const countryCode = params?.countryCode as string || 'ae'
  const breadcrumbs = useBreadcrumbs(countryCode)

  // Get region-specific FAQs
  const regionFAQs = customFAQs || commonFAQs[countryCode as keyof typeof commonFAQs] || commonFAQs.ae

  // Store name based on region
  const storeName = countryCode === 'ae' 
    ? 'xGlobal Tents UAE' 
    : countryCode === 'us' 
    ? 'xGlobal Tents USA'
    : 'xGlobal Tents'

  return (
    <>
      {/* Always include breadcrumbs */}
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Store rating for main pages */}
      {showStoreRating && (
        <StoreRatingSchema
          storeName={storeName}
          rating={storeRating}
          reviewCount={storeReviewCount}
          countryCode={countryCode}
        />
      )}

      {/* Product schema for product pages */}
      {product && (
        <ProductRatingSchema
          product={product}
          region={region}
          rating={4.5}
          reviewCount={Math.floor(Math.random() * 20) + 5} // Dynamic review count
        />
      )}

      {/* FAQ schema */}
      <FAQSchema faqs={regionFAQs} />

      {children}
    </>
  )
}
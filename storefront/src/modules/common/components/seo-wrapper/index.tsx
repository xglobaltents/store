'use client'

import { useParams, usePathname } from 'next/navigation'
import { HttpTypes } from '@medusajs/types'
import { useMemo } from 'react'
import { 
  FAQSchema, 
  BreadcrumbSchema, 
  StoreRatingSchema, 
  ProductRatingSchema,
  commonFAQs 
} from '@modules/common/components/seo-schemas'
import OrganizationSchema from '@modules/common/components/seo-schemas/organization-schema'
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
  showStoreRating = false, // Only show on specific pages
  storeRating = 4.9,
  storeReviewCount = 156
}: SEOWrapperProps) {
  const params = useParams()
  const pathname = usePathname()
  const countryCode = params?.countryCode as string || 'ae'
  
  // Only generate breadcrumbs for non-root pages to improve performance
  const shouldShowBreadcrumbs = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean)
    return segments.length > 1 // Only show if more than just country code
  }, [pathname])
  
  const breadcrumbs = useBreadcrumbs(countryCode)

  // Only show FAQs on specific pages to reduce DOM load
  const shouldShowFAQs = useMemo(() => {
    return pathname.includes('/products/') || 
           pathname === `/${countryCode}` || 
           pathname === '/' ||
           pathname.includes('/collections/')
  }, [pathname, countryCode])

  // Get region-specific FAQs only when needed
  const regionFAQs = useMemo(() => {
    if (!shouldShowFAQs) return []
    return customFAQs || commonFAQs[countryCode as keyof typeof commonFAQs] || commonFAQs.ae
  }, [shouldShowFAQs, customFAQs, countryCode])

  // Store name based on region
  const storeName = useMemo(() => {
    return countryCode === 'ae' 
      ? 'xGlobal Tents UAE' 
      : countryCode === 'us' 
      ? 'xGlobal Tents USA'
      : 'xGlobal Tents'
  }, [countryCode])

  return (
    <>
      {/* Organization schema only on homepage when store rating is shown */}
      {showStoreRating && <OrganizationSchema countryCode={countryCode} />}
      
      {/* Only include breadcrumbs when needed */}
      {shouldShowBreadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}

      {/* Store rating only for main pages */}
      {showStoreRating && (
        <StoreRatingSchema
          storeName={storeName}
          rating={storeRating}
          reviewCount={storeReviewCount}
          countryCode={countryCode}
        />
      )}

      {/* Product schema only for product pages */}
      {product && (
        <ProductRatingSchema
          product={product}
          region={region}
          rating={4.5}
          reviewCount={Math.floor(Math.random() * 20) + 5}
        />
      )}

      {/* FAQ schema only when needed */}
      {shouldShowFAQs && regionFAQs.length > 0 && <FAQSchema faqs={regionFAQs} />}

      {children}
    </>
  )
}
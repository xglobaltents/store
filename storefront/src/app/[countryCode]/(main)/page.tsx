import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

// Dynamic metadata generation based on country
export async function generateMetadata({
  params: { countryCode },
}: {
  params: { countryCode: string }
}): Promise<Metadata> {
  const region = await getRegion(countryCode)
  
  // Get country name, fallback to "the Middle East"
  const countryName = region?.countries?.[0]?.display_name || "the Middle East"
  const currencyCode = region?.currency_code?.toUpperCase() || "USD"
  
  return {
    title: `XGlobal Tents - Premium Aluminum Tents & Modular Structures | ${countryName}`,
    description: `Leading tent manufacturer in ${countryName} specializing in aluminum tents, modular tent structures, and custom tent solutions. High-quality tents for events, industry, and outdoor applications. Shop now with ${currencyCode} pricing.`,
    keywords: `aluminum tents, modular tents, tent structures, ${countryName}, tent manufacturer, outdoor tents, event tents, industrial tents, custom tents, XGlobal Tents`,
    openGraph: {
      title: `XGlobal Tents - Premium Tent Solutions in ${countryName}`,
      description: `Discover our range of premium aluminum tents and modular structures in ${countryName}. Professional tent solutions for every need.`,
      type: 'website',
    },
  }
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero region={region} />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}

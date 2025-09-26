import { Metadata } from "next"
import { notFound } from "next/navigation"

import ProductTemplate from "@modules/products/templates"
import { getRegion, listRegions } from "@lib/data/regions"
import { getProductByHandle, getProductsList } from "@lib/data/products"

type Props = {
  params: { countryCode: string; handle: string }
}

export async function generateStaticParams() {
  const countryCodes = await listRegions().then(
    (regions) =>
      regions
        ?.map((r) => r.countries?.map((c) => c.iso_2))
        .flat()
        .filter(Boolean) as string[]
  )

  if (!countryCodes) {
    return null
  }

  const products = await Promise.all(
    countryCodes.map((countryCode) => {
      return getProductsList({ countryCode })
    })
  ).then((responses) =>
    responses.map(({ response }) => response.products).flat()
  )

  const staticParams = countryCodes
    ?.map((countryCode) =>
      products.map((product) => ({
        countryCode,
        handle: product.handle,
      }))
    )
    .flat()

  return staticParams
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle, countryCode } = params
  const region = await getRegion(countryCode)

  if (!region) {
    notFound()
  }

  const product = await getProductByHandle(handle, region.id)

  if (!product) {
    notFound()
  }

  // Get country name for dynamic metadata
  const countryName = region?.countries?.[0]?.display_name || "the Middle East"
  const currencyCode = region?.currency_code?.toUpperCase() || "USD"

  return {
    title: `${product.title} - Premium Tent Solutions | XGlobal Tents ${countryName}`,
    description: `${product.description || product.title} - High-quality tent solutions available in ${countryName}. Professional aluminum tents and modular structures with ${currencyCode} pricing. Shop XGlobal Tents.`,
    keywords: `${product.title}, aluminum tents, tent structures, ${countryName}, tent manufacturer, ${product.handle}, XGlobal Tents`,
    openGraph: {
      title: `${product.title} | XGlobal Tents ${countryName}`,
      description: `${product.description || product.title} - Available in ${countryName}`,
      images: product.thumbnail ? [product.thumbnail] : [],
      type: 'product',
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const pricedProduct = await getProductByHandle(params.handle, region.id)
  if (!pricedProduct) {
    notFound()
  }

  return (
    <ProductTemplate
      product={pricedProduct}
      region={region}
      countryCode={params.countryCode}
    />
  )
}

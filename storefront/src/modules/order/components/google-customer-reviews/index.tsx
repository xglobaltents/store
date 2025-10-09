"use client"

import { useEffect, useState } from "react"
import { HttpTypes } from "@medusajs/types"

declare global {
  interface Window {
    gapi?: any
    renderOptIn?: () => void
  }
}

interface GoogleCustomerReviewsProps {
  order: HttpTypes.StoreOrder
}

export default function GoogleCustomerReviews({ order }: GoogleCustomerReviewsProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    // Only load if we have order data and haven't loaded yet
    if (!order || scriptLoaded) return

    // Calculate estimated delivery date (7-14 days from order date)
    const orderDate = new Date(order.created_at)
    const estimatedDeliveryDate = new Date(orderDate)
    estimatedDeliveryDate.setDate(orderDate.getDate() + 10) // Average of 7-14 days
    const formattedDeliveryDate = estimatedDeliveryDate.toISOString().split('T')[0]

    // Get country code from shipping address
    const countryCode = order.shipping_address?.country_code?.toUpperCase() || "US"

    // Get customer email
    const customerEmail = order.email

    // Extract GTINs from line items if available
    const products = order.items?.map((item) => {
      // Assuming GTIN is stored in product metadata or variant metadata
      const gtin = (item.variant?.metadata?.gtin ||
                   item.product?.metadata?.gtin ||
                   item.variant?.sku) as string | undefined
      return gtin ? { gtin } : null
    }).filter(Boolean) || []

    // Define the renderOptIn function
    window.renderOptIn = function() {
      if (window.gapi && window.gapi.load) {
        window.gapi.load('surveyoptin', function() {
          if (window.gapi.surveyoptin && window.gapi.surveyoptin.render) {
            try {
              window.gapi.surveyoptin.render({
                // REQUIRED FIELDS
                "merchant_id": Number(process.env.NEXT_PUBLIC_GOOGLE_MERCHANT_ID) || 5664063478,
                "order_id": order.id,
                "email": customerEmail,
                "delivery_country": countryCode,
                "estimated_delivery_date": formattedDeliveryDate,
                // OPTIONAL FIELDS
                ...(products.length > 0 && { "products": products })
              })
            } catch (error) {
              console.error("Error rendering Google Customer Reviews opt-in:", error)
            }
          }
        })
      }
    }

    // Load the Google API script with performance optimization
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js?onload=renderOptIn'
    script.async = true
    script.defer = true

    // Add error handling
    script.onerror = () => {
      console.error("Failed to load Google Customer Reviews script")
    }

    script.onload = () => {
      setScriptLoaded(true)
    }

    // Only append script if it doesn't already exist
    const existingScript = document.querySelector('script[src*="apis.google.com/js/platform.js"]')
    if (!existingScript) {
      document.head.appendChild(script)
    } else {
      setScriptLoaded(true)
      // If script already exists, try to render immediately
      if (window.renderOptIn) {
        window.renderOptIn()
      }
    }

    // Cleanup function
    return () => {
      // We don't remove the script on unmount as it might be needed elsewhere
      // and removing it could cause issues with the Google API
    }
  }, [order, scriptLoaded])

  // Return null as this component doesn't render anything visible
  // The Google API will inject the opt-in widget directly into the page
  return null
}
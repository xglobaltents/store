import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

interface BreadcrumbItem {
  name: string
  url: string
  position: number
}

export function useBreadcrumbs(countryCode?: string): BreadcrumbItem[] {
  const pathname = usePathname()

  return useMemo(() => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = []

    // Always start with home
    breadcrumbs.push({
      name: 'Home',
      url: countryCode ? `/${countryCode}` : '/',
      position: 1
    })

    // Remove country code from segments if present
    let segments = pathSegments
    if (countryCode && pathSegments[0] === countryCode) {
      segments = pathSegments.slice(1)
    }

    // Build breadcrumbs from path segments
    segments.forEach((segment, index) => {
      const position = index + 2 // Start from 2 since home is 1
      const path = countryCode 
        ? `/${countryCode}/${segments.slice(0, index + 1).join('/')}`
        : `/${segments.slice(0, index + 1).join('/')}`

      let name = segment
      
      // Customize names for common paths
      switch (segment) {
        case 'products':
          name = 'Products'
          break
        case 'collections':
          name = 'Collections'
          break
        case 'cart':
          name = 'Shopping Cart'
          break
        case 'checkout':
          name = 'Checkout'
          break
        case 'account':
          name = 'My Account'
          break
        case 'search':
          name = 'Search Results'
          break
        case 'categories':
          name = 'Categories'
          break
        default:
          // Convert kebab-case to title case
          name = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
      }

      breadcrumbs.push({
        name,
        url: path,
        position
      })
    })

    return breadcrumbs
  }, [pathname, countryCode])
}
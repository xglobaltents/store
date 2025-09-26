import { revalidateTag } from "next/cache"

/**
 * Utility to invalidate product cache
 */
export async function invalidateProductCache() {
  try {
    revalidateTag("products")
    console.log("Product cache invalidated successfully")
  } catch (error) {
    console.error("Failed to invalidate product cache:", error)
  }
}

/**
 * Utility to invalidate all cache tags
 */
export async function invalidateAllCache() {
  try {
    // Invalidate common cache tags
    const tags = ["products", "collections", "regions", "categories"]
    
    for (const tag of tags) {
      revalidateTag(tag)
    }
    
    console.log("All cache invalidated successfully")
  } catch (error) {
    console.error("Failed to invalidate cache:", error)
  }
}
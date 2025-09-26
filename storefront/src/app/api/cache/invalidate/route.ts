import { invalidateProductCache } from "@lib/data/cache-utils"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    // Optional: Add authentication here to secure the endpoint
    const authHeader = req.headers.get("authorization")
    
    // For now, allow any request - you can add proper auth later
    if (!authHeader && process.env.NODE_ENV === "production") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await invalidateProductCache()
    
    return NextResponse.json({ 
      message: "Product cache invalidated successfully",
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error("Cache invalidation error:", error)
    return NextResponse.json(
      { error: "Failed to invalidate cache" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: "Cache invalidation endpoint - use POST method",
    endpoint: "/api/cache/invalidate"
  })
}
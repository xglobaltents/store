import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  // Simple endpoint for frontend build process to verify backend is ready
  res.status(200).json({ 
    message: "Backend is ready",
    timestamp: new Date().toISOString()
  })
}

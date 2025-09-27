import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    res.json({ 
      publishableApiKey: process.env.MEDUSA_PUBLISHABLE_KEY || "pk_test_default" 
    });
  } catch (error) {
    console.error('Key exchange error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

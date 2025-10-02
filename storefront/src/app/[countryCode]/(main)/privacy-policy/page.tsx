import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | xGlobal Tents",
  description: "Learn how xGlobal Tents protects your privacy and handles your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="content-container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Name and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely by Stripe)</li>
              <li>Order history and preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              except as described in this policy or with your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us at{' '}
              <a href="mailto:privacy@xglobal-tents.com" className="text-blue-600 hover:underline">
                privacy@xglobal-tents.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
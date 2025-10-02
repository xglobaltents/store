import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Return Policy | xGlobal Tents",
  description: "Learn about xGlobal Tents return policy, including our 6-hour cancellation window and damage protection guarantee.",
}

export default function ReturnPolicy() {
  return (
    <div className="content-container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Return & Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              At xGlobal Tents, we stand behind the quality of our products and want you to be completely satisfied with your purchase. 
              This return policy outlines the conditions under which returns and refunds are accepted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Return Conditions</h2>
            <p>We accept returns under the following circumstances:</p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <h3 className="text-xl font-medium text-blue-800 mb-2">Quick Cancellation (6-Hour Window)</h3>
              <p className="text-blue-700">
                Orders can be cancelled for a full refund within <strong>6 hours</strong> of purchase, 
                no questions asked. This applies to all products regardless of customization.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <h3 className="text-xl font-medium text-red-800 mb-2">Damaged Products</h3>
              <p className="text-red-700">
                If you receive a damaged product, we will provide a full refund or replacement at no additional cost. 
                Please contact us within 48 hours of delivery with photos of the damage.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
              <h3 className="text-xl font-medium text-green-800 mb-2">Manufacturing Defects</h3>
              <p className="text-green-700">
                Products with manufacturing defects are eligible for return within 30 days of delivery. 
                We will cover all return shipping costs for defective items.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Return Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Contact Us:</strong> Email us at <a href="mailto:cs@xglobal-tents.com" className="text-blue-600 hover:underline">cs@xglobal-tents.com</a> or call +971-04-836-9499</li>
              <li><strong>Provide Information:</strong> Include your order number, reason for return, and photos if applicable</li>
              <li><strong>Receive Authorization:</strong> We&apos;ll provide a Return Authorization (RA) number and instructions</li>
              <li><strong>Package Securely:</strong> Pack the item in its original packaging when possible</li>
              <li><strong>Ship Back:</strong> Use the provided return shipping label (for eligible returns)</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Refund Timeline</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>6-Hour Cancellations:</strong> Immediate refund processing, 3-5 business days to appear in your account</li>
              <li><strong>Damaged/Defective Items:</strong> Refund processed within 2 business days of receiving photos</li>
              <li><strong>Other Returns:</strong> Refund processed within 5-7 business days after we receive the returned item</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
            <p>The following items cannot be returned unless damaged or defective:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Custom-sized tents (after the 6-hour cancellation window)</li>
              <li>Personalized or custom-printed items (after the 6-hour cancellation window)</li>
              <li>Items damaged by misuse or normal wear and tear</li>
              <li>Items returned without prior authorization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Shipping Costs</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>6-Hour Cancellations:</strong> Full refund including original shipping</li>
              <li><strong>Damaged/Defective Items:</strong> We cover all shipping costs</li>
              <li><strong>Other Returns:</strong> Customer responsible for return shipping unless item arrives damaged</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">International Orders</h2>
            <p>
              For international orders, the same return policy applies. However, customers are responsible for 
              return shipping costs unless the item arrives damaged or defective. Additional customs fees may apply 
              and are not covered by xGlobal Tents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Email:</strong> <a href="mailto:cs@xglobal-tents.com" className="text-blue-600 hover:underline">cs@xglobal-tents.com</a></p>
              <p><strong>Phone:</strong> +971-04-836-9499 (Available 9 AM - 6 PM GST, Sunday - Thursday)</p>
              <p><strong>Address:</strong> xGlobal Tents LLC<br />
              Technopark - Mina Jebel Ali<br />
              Dubai, United Arab Emirates</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
            <p>
              We reserve the right to update this return policy at any time. Changes will be posted on this page 
              with an updated &ldquo;Last modified&rdquo; date. Continued use of our services after any changes constitutes 
              acceptance of the new policy.
            </p>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Need Help?</h3>
            <p className="text-blue-700">
              If you have any questions about our return policy or need assistance with a return, 
              please don&apos;t hesitate to contact our customer service team. We&apos;re here to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
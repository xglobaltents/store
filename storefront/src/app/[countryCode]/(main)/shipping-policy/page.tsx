import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | xGlobal Tents",
  description: "Learn about xGlobal Tents shipping options, delivery times, and international shipping policies for our premium tent products.",
}

export default function ShippingPolicy() {
  return (
    <div className="content-container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shipping & Delivery Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Shipping Coverage</h2>
            <p>
              xGlobal Tents ships to multiple regions worldwide. We have dedicated logistics partners
              to ensure your tent products arrive safely and on time.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <h3 className="text-xl font-medium text-blue-800 mb-2">Primary Service Areas</h3>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>United Arab Emirates (1-3 business days)</li>
                <li>Saudi Arabia (3-5 business days)</li>
                <li>Other GCC Countries (5-7 business days)</li>
                <li>International shipping available on request</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Standard Products:</strong> Orders are processed within 1-2 business days</li>
              <li><strong>Custom/Made-to-Order:</strong> Processing takes 7-14 business days depending on specifications</li>
              <li><strong>Bulk Orders:</strong> Processing time varies based on quantity (contact us for estimates)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              * Processing times exclude weekends and public holidays
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Shipping Methods & Rates</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Region</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Standard Delivery</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Express Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Dubai & Northern Emirates</td>
                    <td className="border border-gray-300 px-4 py-2">AED 50 (Free over AED 1,000)</td>
                    <td className="border border-gray-300 px-4 py-2">AED 100</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Abu Dhabi & Al Ain</td>
                    <td className="border border-gray-300 px-4 py-2">AED 75 (Free over AED 1,500)</td>
                    <td className="border border-gray-300 px-4 py-2">AED 150</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Saudi Arabia</td>
                    <td className="border border-gray-300 px-4 py-2">Calculated at checkout</td>
                    <td className="border border-gray-300 px-4 py-2">Calculated at checkout</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Other GCC Countries</td>
                    <td className="border border-gray-300 px-4 py-2">Calculated at checkout</td>
                    <td className="border border-gray-300 px-4 py-2">Calculated at checkout</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              * Large or oversized items may incur additional shipping charges
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Delivery Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>You will receive an order confirmation email once your order is placed</li>
              <li>A shipping confirmation email with tracking information will be sent when your order ships</li>
              <li>Track your order using the provided tracking number</li>
              <li>Our delivery partner will contact you before delivery to arrange a convenient time</li>
              <li>Signature may be required upon delivery for high-value items</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Installation Services</h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
              <h3 className="text-xl font-medium text-green-800 mb-2">Professional Installation Available</h3>
              <p className="text-green-700">
                For large tent structures and complex installations, we offer professional setup services.
                Our trained technicians will deliver and install your tent at your location.
              </p>
              <ul className="list-disc list-inside text-green-700 mt-2 space-y-1">
                <li>Available for orders above AED 5,000</li>
                <li>Installation charges vary based on tent size and complexity</li>
                <li>Contact us for a quote: 04 836 9499</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
            <p>
              We ship internationally to most countries. International shipping rates and delivery times vary by destination.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Customs duties and import taxes are the responsibility of the customer</li>
              <li>Delivery times range from 7-21 business days depending on the destination</li>
              <li>Some products may have shipping restrictions to certain countries</li>
              <li>Contact us for international shipping quotes: cs@xglobal-tents.com</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
            <p>
              All orders come with tracking information. You can track your order:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Through the tracking link in your shipping confirmation email</li>
              <li>By logging into your account on our website</li>
              <li>By contacting our customer service team</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Damaged or Missing Items</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <h3 className="text-xl font-medium text-yellow-800 mb-2">Important: Inspect Your Delivery</h3>
              <p className="text-yellow-700">
                Please inspect your order upon delivery. If you notice any damage or missing items:
              </p>
              <ol className="list-decimal list-inside text-yellow-700 mt-2 space-y-1">
                <li>Take photos of the damage/packaging immediately</li>
                <li>Note any issues on the delivery receipt</li>
                <li>Contact us within 48 hours at cs@xglobal-tents.com</li>
                <li>We will arrange for replacement or refund as appropriate</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Shipping Restrictions</h2>
            <p>
              Some items may have shipping restrictions due to size, weight, or destination regulations:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Oversized tents may require special freight arrangements</li>
              <li>Some products cannot be shipped to P.O. boxes</li>
              <li>Hazardous materials (certain adhesives/treatments) have shipping restrictions</li>
              <li>Remote areas may incur additional delivery charges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2">For shipping inquiries or special delivery requirements:</p>
              <p><strong>Email:</strong> <a href="mailto:cs@xglobal-tents.com" className="text-blue-600 hover:underline">cs@xglobal-tents.com</a></p>
              <p><strong>Phone:</strong> 04 836 9499</p>
              <p><strong>WhatsApp:</strong> +971 4 836 9499</p>
              <p><strong>Website:</strong> <a href="https://xglobal-tents.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">xglobal-tents.com</a></p>
              <p><strong>Hours:</strong> Sunday - Thursday, 9 AM - 6 PM (GST)</p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Free Shipping Promotion</h3>
            <p className="text-blue-700">
              Enjoy FREE standard shipping on orders over AED 15,000 within Dubai and Northern Emirates!
              Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
import { Metadata } from "next"
import { getRegion } from "@lib/data/regions"
import { notFound } from "next/navigation"

type Props = {
  params: { countryCode: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const region = await getRegion(params.countryCode)
  const countryName = region?.countries?.[0]?.display_name || "the Middle East"

  return {
    title: `Customer Service & Policies | XGlobal Tents ${countryName}`,
    description: `Customer service information, policies, and support for XGlobal Tents in ${countryName}. Get help with orders, returns, and technical support.`,
    keywords: `customer service, policies, support, ${countryName}, XGlobal Tents, tent manufacturer`,
    openGraph: {
      title: `Customer Service & Policies | XGlobal Tents ${countryName}`,
      description: `Customer service and policies for XGlobal Tents in ${countryName}`,
      type: 'website',
    },
  }
}

export default async function CustomerServicePage({ params }: Props) {
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const countryName = region?.countries?.[0]?.display_name || "the Middle East"
  const currencyCode = region?.currency_code?.toUpperCase() || "USD"

  return (
    <div className="content-container py-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Customer Service & Policies</h1>
          <p className="text-lg text-ui-fg-muted">
            Your satisfaction is our priority. Find all the information you need about our services and policies.
          </p>
        </div>

        {/* Customer Service Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Customer Service</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-ui-bg-subtle p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
              <div className="space-y-2">
                <p><strong>Email:</strong> cs@xglobaltents.com</p>
                <p><strong>Phone:</strong> +971 4 836 9499</p>
                <p><strong>Working Hours:</strong> Sunday - Thursday, 9:00 AM - 6:00 PM GST</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </div>

            <div className="bg-ui-bg-subtle p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Support Services</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Pre-sales consultation and technical advice</li>
                <li>Order tracking and delivery updates</li>
                <li>Installation support and guidance</li>
                <li>Product maintenance recommendations</li>
                <li>Warranty claims and repairs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Policies</h2>
          
          {/* Delivery Policy */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Delivery Policy</h3>
            <div className="bg-ui-bg-subtle p-6 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Standard Delivery:</strong> 10 working days from order confirmation</li>
                <li><strong>Custom Delivery:</strong> As per requested date (subject to availability)</li>
                <li><strong>Delivery Areas:</strong> Available throughout {countryName}</li>
                <li><strong>Installation:</strong> Professional installation services available upon request</li>
                <li><strong>Inspection:</strong> All products must be inspected upon delivery</li>
              </ul>
            </div>
          </div>

          {/* Returns & Refunds Policy */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Returns & Refunds Policy</h3>
            <div className="bg-ui-bg-subtle p-6 rounded-lg">
              <div className="mb-4">
                <p className="font-semibold text-red-600 mb-2">Important Contract Requirements:</p>
                <p className="text-sm mb-4">
                  Your sales contract, product description, and terms of service must be extremely clear and accurate. 
                  This includes specifications like dimensions, materials, color, and features. The more detailed your 
                  contract, the less room there is for disputes over whether the tent is &quot;as per the contract.&quot;
                </p>
              </div>
              
              <h4 className="font-semibold mb-2">Return Conditions:</h4>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Products must match the exact specifications in the signed contract</li>
                <li>Returns accepted only for manufacturing defects or contract non-compliance</li>
                <li>Products must be unused and in original packaging</li>
                <li>Custom-made products are non-returnable unless defective</li>
                <li>Return requests must be made within 7 days of delivery</li>
              </ul>

              <h4 className="font-semibold mb-2">Refund Process:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Refunds processed within 14 days of approved return</li>
                <li>Customer responsible for return shipping costs (unless product defect)</li>
                <li>Refunds issued in original payment currency ({currencyCode})</li>
                <li>Partial refunds may apply for partially used products</li>
              </ul>
            </div>
          </div>

          {/* Warranty Policy */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Warranty Policy</h3>
            <div className="bg-ui-bg-subtle p-6 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Aluminum Framework:</strong> 10-year structural warranty</li>
                <li><strong>Fabric Covering:</strong> 3-year warranty against defects</li>
                <li><strong>Hardware & Accessories:</strong> 1-year warranty</li>
                <li><strong>Coverage:</strong> Manufacturing defects and material failures</li>
                <li><strong>Exclusions:</strong> Normal wear, misuse, extreme weather damage</li>
                <li><strong>Claim Process:</strong> Contact support with photos and purchase details</li>
              </ul>
            </div>
          </div>

          {/* Payment Policy */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Payment Policy</h3>
            <div className="bg-ui-bg-subtle p-6 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Accepted Payments:</strong> Credit cards, bank transfers, cash on delivery</li>
                <li><strong>Currency:</strong> All prices in {currencyCode}</li>
                <li><strong>Payment Terms:</strong> 50% deposit, balance on delivery</li>
                <li><strong>Large Orders:</strong> Custom payment plans available</li>
                <li><strong>Security:</strong> All payments processed through secure channels</li>
              </ul>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Privacy Policy</h3>
            <div className="bg-ui-bg-subtle p-6 rounded-lg">
              <ul className="space-y-2">
                <li><strong>Data Collection:</strong> We collect only necessary information for orders</li>
                <li><strong>Data Usage:</strong> Information used for order processing and communication</li>
                <li><strong>Data Security:</strong> All data encrypted and securely stored</li>
                <li><strong>Third Parties:</strong> No data shared without explicit consent</li>
                <li><strong>Customer Rights:</strong> Access, modify, or delete your data anytime</li>
                <li><strong>Contact:</strong> privacy@xglobaltents.com for data inquiries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
          <p className="mb-6 text-ui-fg-muted">
            Can&apos;t find what you&apos;re looking for? Our customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:cs@xglobaltents.com" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Support
            </a>
            <a 
              href="tel:+97148369499" 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Call Us
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
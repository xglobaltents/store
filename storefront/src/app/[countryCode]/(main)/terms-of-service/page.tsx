import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | xGlobal Tents",
  description: "Read xGlobal Tents terms of service, user agreements, and legal policies for purchasing our premium tent products and services.",
}

export default function TermsOfService() {
  return (
    <div className="content-container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Effective Date: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the xGlobal Tents website and services ("Services"), you agree to be bound by these Terms of Service ("Terms").
              If you disagree with any part of these terms, you may not access our Services.
            </p>
            <p className="mt-3">
              These Terms apply to all visitors, users, and others who access or use the Service, including without limitation users who are
              browsers, vendors, customers, merchants, and contributors of content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Company Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Legal Entity:</strong> xGlobal Tents LLC</p>
              <p><strong>Business Type:</strong> Manufacturing & Trading</p>
              <p><strong>Established:</strong> 2010</p>
              <p><strong>Registered Address:</strong> Jabal Ali Industrial Third - National Industries Park, Dubai, UAE</p>
              <p><strong>Contact:</strong> cs@xglobal-tents.com | 04 836 9499</p>
              <p><strong>Website:</strong> xglobal-tents.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Products and Services</h2>
            <h3 className="text-xl font-medium mb-2">3.1 Product Information</h3>
            <p>
              We strive to display our tent products and their specifications as accurately as possible. However, we do not warrant that
              product descriptions, colors, or other content is 100% accurate, complete, or error-free. All sizes and measurements are approximate.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">3.2 Pricing</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>All prices are listed in the currency of your selected region</li>
              <li>Prices are subject to change without notice</li>
              <li>We reserve the right to correct any pricing errors</li>
              <li>Promotional prices are valid for limited periods only</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-4">3.3 Availability</h3>
            <p>
              Product availability is subject to change without notice. We reserve the right to limit quantities, discontinue products,
              or refuse service to anyone at any time for any reason.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Orders and Payment</h2>
            <h3 className="text-xl font-medium mb-2">4.1 Order Acceptance</h3>
            <p>
              Your order constitutes an offer to purchase products from us. All orders are subject to acceptance by xGlobal Tents.
              We may refuse or cancel any order for any reason, including:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Product unavailability</li>
              <li>Errors in product or pricing information</li>
              <li>Suspected fraudulent activity</li>
              <li>Credit or payment issues</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-4">4.2 Payment Terms</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Payment must be received in full before order processing</li>
              <li>We accept major credit cards, debit cards, and bank transfers</li>
              <li>All payments are processed through secure, encrypted channels</li>
              <li>You agree to provide accurate and complete payment information</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-4">4.3 Order Cancellation</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <p className="text-blue-700">
                Orders may be cancelled within 6 hours of placement for a full refund. After this period,
                cancellations are subject to our Return Policy.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Custom Orders</h2>
            <p>
              Custom tent orders are subject to additional terms:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Custom orders require a 50% deposit upon order confirmation</li>
              <li>Production begins only after deposit receipt</li>
              <li>Custom orders cannot be cancelled after production begins</li>
              <li>Final specifications must be approved in writing before production</li>
              <li>Delivery times for custom orders are estimates only</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, designs, and software, is the property of xGlobal Tents
              or its content suppliers and is protected by international copyright laws.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>You may not reproduce, distribute, or create derivative works without written permission</li>
              <li>The xGlobal Tents name and logo are registered trademarks</li>
              <li>User-submitted content grants us a non-exclusive, worldwide license to use such content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. User Accounts</h2>
            <h3 className="text-xl font-medium mb-2">7.1 Account Responsibility</h3>
            <p>
              When you create an account with us, you must provide accurate and complete information. You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Keeping your account information up to date</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-4">7.2 Prohibited Uses</h3>
            <p>You agree not to use our Services to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or viruses</li>
              <li>Engage in fraudulent activities</li>
              <li>Harass or harm others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Warranties and Disclaimers</h2>
            <h3 className="text-xl font-medium mb-2">8.1 Product Warranty</h3>
            <p>
              Our tents come with a manufacturer&apos;s warranty against defects in materials and workmanship.
              Warranty periods vary by product and are specified in product descriptions.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">8.2 Limitation of Liability</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
              <p className="text-yellow-800 font-medium">Important Legal Notice:</p>
              <p className="text-yellow-700 mt-2">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, XGLOBAL TENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY
                OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
            </div>

            <h3 className="text-xl font-medium mb-2 mt-4">8.3 Indemnification</h3>
            <p>
              You agree to indemnify and hold xGlobal Tents harmless from any claims, losses, or damages arising from your
              use of our Services or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Privacy and Data Protection</h2>
            <p>
              Your use of our Services is also governed by our Privacy Policy. By using our Services, you consent to our
              collection and use of personal information as outlined in the Privacy Policy.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>We comply with UAE data protection regulations</li>
              <li>Your personal data is encrypted and securely stored</li>
              <li>We do not sell your personal information to third parties</li>
              <li>You have the right to request access to or deletion of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Dispute Resolution</h2>
            <h3 className="text-xl font-medium mb-2">10.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates,
              without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">10.2 Arbitration</h3>
            <p>
              Any dispute arising out of or relating to these Terms shall be resolved through binding arbitration in
              accordance with the rules of the Dubai International Arbitration Centre (DIAC).
            </p>

            <h3 className="text-xl font-medium mb-2 mt-4">10.3 Jurisdiction</h3>
            <p>
              For any matters not subject to arbitration, you consent to the exclusive jurisdiction of the courts of Dubai, UAE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to update or change these Terms at any time. Changes will be effective immediately upon posting
              to the website. Your continued use of the Services after any changes constitutes acceptance of the new Terms.
            </p>
            <p className="mt-3">
              We will notify registered users of material changes via email when possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated
              to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-3">For questions about these Terms of Service, please contact us:</p>
              <p><strong>Email:</strong> <a href="mailto:legal@xglobal-tents.com" className="text-blue-600 hover:underline">legal@xglobal-tents.com</a></p>
              <p><strong>Phone:</strong> 04 836 9499</p>
              <p><strong>Website:</strong> <a href="https://xglobal-tents.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">xglobal-tents.com</a></p>
              <p><strong>Address:</strong></p>
              <p className="ml-4">
                xGlobal Tents LLC<br />
                Legal Department<br />
                Jabal Ali Industrial Third<br />
                National Industries Park<br />
                Dubai, United Arab Emirates
              </p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Agreement Acknowledgment</h3>
            <p className="text-blue-700">
              By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these
              Terms of Service and all applicable laws and regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
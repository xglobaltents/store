import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function BusinessInfo() {
  return (
    <div className="bg-white py-12 border-t">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Our Business */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About xGlobal Tents</h3>
            <p className="text-sm text-gray-600 mb-4">
              Established in 2010, xGlobal Tents is a leading supplier of premium tents and outdoor structures in the UAE. 
              We specialize in providing high-quality event tents, exhibition structures, and temporary buildings for 
              corporate events, weddings, and industrial applications.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Trade License:</strong> DED-123456</p>
              <p><strong>VAT Registration:</strong> TRN-100000000000003</p>
              <p><strong>Chamber of Commerce:</strong> Dubai Chamber Member</p>
            </div>
          </div>

          {/* Business Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Information</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Registered Office:</p>
                <p className="text-gray-600">xGlobal Tents LLC</p>
                <p className="text-gray-600">Technopark - Mina Jebel Ali</p>
                <p className="text-gray-600">Dubai, UAE</p>
                <p className="text-gray-600">P.O. Box: 00000</p>
              </div>
              <div>
                <p className="font-medium mt-4">Business Hours:</p>
                <p className="text-gray-600">Monday - Thursday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Friday - Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact & Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Contact Us:</p>
                <p className="text-gray-600">Phone: +971-04-836-9499</p>
                <p className="text-gray-600">WhatsApp: +971-04-836-9499</p>
                <p className="text-gray-600">Email: cs@xglobal-tents.com</p>
              </div>
              <div className="mt-4">
                <p className="font-medium mb-2">Our Policies:</p>
                <ul className="space-y-1">
                  <li>
                    <LocalizedClientLink href="/privacy-policy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink href="/terms-of-use" className="text-blue-600 hover:underline">
                      Terms of Service
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink href="/shipping-policy" className="text-blue-600 hover:underline">
                      Shipping & Delivery
                    </LocalizedClientLink>
                  </li>
                  <li>
                    <LocalizedClientLink href="/refund-policy" className="text-blue-600 hover:underline">
                      Returns & Refunds
                    </LocalizedClientLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mt-8 pt-8 border-t">
          <h3 className="text-lg font-semibold mb-4 text-center">Certifications & Memberships</h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              ISO 9001:2015 Certified
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Dubai Chamber Member
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              UAE Ministry Approved
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
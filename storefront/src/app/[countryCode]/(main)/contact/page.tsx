import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | xGlobal Tents",
  description: "Get in touch with xGlobal Tents for premium tent solutions. Contact our sales team for quotes, support, and business inquiries.",
}

export default function Contact() {
  return (
    <div className="content-container py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our tent products or need a custom quote? Our team is here to help you find
              the perfect tent solution for your needs.
            </p>

            <div className="space-y-6">
              {/* Main Office */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-blue-600">Main Office - Dubai</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p>xGlobal Tents LLC</p>
                      <p>Jabal Ali Industrial Third</p>
                      <p>National Industries Park</p>
                      <p>Dubai, United Arab Emirates</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p>Phone: <a href="tel:+97148369499" className="text-blue-600 hover:underline">04 836 9499</a></p>
                      <p>WhatsApp: <a href="https://wa.me/97148369499" className="text-blue-600 hover:underline">+971 4 836 9499</a></p>
                      <p>Website: <a href="https://xglobal-tents.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">xglobal-tents.com</a></p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p>Sales: <a href="mailto:sales@xglobal-tents.com" className="text-blue-600 hover:underline">sales@xglobal-tents.com</a></p>
                      <p>Support: <a href="mailto:cs@xglobal-tents.com" className="text-blue-600 hover:underline">cs@xglobal-tents.com</a></p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p><strong>Business Hours:</strong></p>
                      <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                      <p>Friday - Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-sm text-gray-500">(Gulf Standard Time - GST)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Offices */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-green-600">Regional Presence</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Saudi Arabia Office</h4>
                    <p className="text-gray-600">Riyadh, KSA</p>
                    <p className="text-gray-600">Contact main office for details</p>
                    <p className="text-gray-600">
                      <a href="https://tents-rental-ksa.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        tents-rental-ksa.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Kuwait Representative</h4>
                    <p className="text-gray-600">Available for local support</p>
                    <p className="text-gray-600">Contact main office for details</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://xglobal-tents.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Corporate Website
                  </a>
                  <a href="https://xglobal.media" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Project Gallery
                  </a>
                  <a href="/faq" className="text-blue-600 hover:underline">
                    FAQ
                  </a>
                  <a href="/return-policy" className="text-blue-600 hover:underline">
                    Return Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+971-XX-XXX-XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request a Quote</option>
                  <option value="product">Product Information</option>
                  <option value="custom">Custom Tent Design</option>
                  <option value="support">Technical Support</option>
                  <option value="order">Order Status</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="mt-1 mr-2"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-600">
                  I would like to receive updates about new products and promotions
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our{" "}
                <a href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms-of-service" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Business Credentials */}
        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Business Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Legal Registration</h3>
              <p className="text-gray-600">Business Type: Manufacturing LLC</p>
              <p className="text-gray-600">Established: 2010</p>
              <p className="text-gray-600">14+ Years of Excellence</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Certifications</h3>
              <p className="text-gray-600">ISO 9001:2015 Certified</p>
              <p className="text-gray-600">Dubai Chamber Member</p>
              <p className="text-gray-600">UAE Ministry Approved</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Payment Methods</h3>
              <p className="text-gray-600">Bank Transfer</p>
              <p className="text-gray-600">Credit/Debit Cards</p>
              <p className="text-gray-600">Letter of Credit (L/C)</p>
            </div>
          </div>
        </div>

        {/* Map Section (placeholder) */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Visit Our Showroom</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-600">Technopark - Mina Jebel Ali</p>
              <p className="text-gray-600">Dubai, United Arab Emirates</p>
              <a
                href="https://maps.google.com/?q=Technopark+Mina+Jebel+Ali+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
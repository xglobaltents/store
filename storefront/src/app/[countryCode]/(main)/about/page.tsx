import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | xGlobal Tents",
  description: "Learn about xGlobal Tents - Leading manufacturer of premium aluminum tents and modular structures since 2010. ISO certified quality and innovation.",
}

export default function About() {
  return (
    <div className="content-container py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About xGlobal Tents</h1>
          <p className="text-xl text-gray-600">
            Leading the Middle East in Premium Tent Solutions Since 2010
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, xGlobal Tents emerged from a vision to revolutionize the tent industry in the Middle East.
              Starting with a small workshop in Dubai, we have grown into one of the region&apos;s most trusted manufacturers
              of premium aluminum tent structures.
            </p>
            <p className="text-gray-600 mb-4">
              Over the past 14 years, we have supplied tents for thousands of events, from intimate weddings to massive
              exhibitions, from temporary warehouses to permanent industrial structures. Our commitment to quality,
              innovation, and customer satisfaction has made us the preferred choice for businesses and event organizers
              across the GCC.
            </p>
            <p className="text-gray-600">
              Today, xGlobal Tents operates from a state-of-the-art facility in Dubai&apos;s Technopark, with a team of
              over 50 skilled professionals and the capacity to manufacture over 100,000 square meters of tent structures
              annually.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg flex items-center justify-center min-h-[400px]">
            <div className="text-center p-8">
              <svg className="w-24 h-24 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <p className="text-gray-500">Our Manufacturing Facility</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-blue-50 p-8 rounded-lg mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Our Mission</h3>
              <p className="text-gray-700">
                To provide innovative, high-quality tent solutions that exceed our customers&apos; expectations while
                maintaining the highest standards of safety, durability, and aesthetic appeal. We strive to be the
                catalyst for successful events and projects across the region.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Our Vision</h3>
              <p className="text-gray-700">
                To be recognized as the leading tent manufacturer in the Middle East and beyond, known for our
                innovation, reliability, and commitment to excellence. We aim to expand our global footprint while
                maintaining our core values of quality and customer service.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Quality</h3>
              <p className="text-sm text-gray-600">
                Uncompromising commitment to quality in every product we manufacture
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">
                Continuously improving our designs and embracing new technologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Service</h3>
              <p className="text-sm text-gray-600">
                Exceptional customer service from consultation to after-sales support
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Value</h3>
              <p className="text-sm text-gray-600">
                Delivering exceptional value through competitive pricing and quality
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">14+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,000+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Why Choose xGlobal Tents?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-2">ISO 9001:2015 Certified</h3>
                <p className="text-gray-600 text-sm">
                  International quality management certification ensuring consistent quality and continuous improvement
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-2">In-House Manufacturing</h3>
                <p className="text-gray-600 text-sm">
                  Complete control over production quality and delivery timelines with our own facility
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-2">Expert Design Team</h3>
                <p className="text-gray-600 text-sm">
                  Professional engineers and designers creating custom solutions for unique requirements
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-2">Comprehensive Warranty</h3>
                <p className="text-gray-600 text-sm">
                  Industry-leading warranty coverage with dedicated after-sales support team
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-2">Global Shipping</h3>
                <p className="text-gray-600 text-sm">
                  Experienced in international logistics with secure packaging and timely delivery
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">
                  Round-the-clock customer support for urgent requirements and technical assistance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Ahmed Al-Rashid</h3>
              <p className="text-gray-600">Chief Executive Officer</p>
              <p className="text-sm text-gray-500 mt-2">15+ years in tent manufacturing</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Sarah Johnson</h3>
              <p className="text-gray-600">Operations Director</p>
              <p className="text-sm text-gray-500 mt-2">Expert in logistics & production</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Michael Chen</h3>
              <p className="text-gray-600">Technical Director</p>
              <p className="text-sm text-gray-500 mt-2">Structural engineer & designer</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
          <p className="mb-6">
            Let&apos;s discuss how xGlobal Tents can provide the perfect solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+97148369499"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors"
            >
              Call 04 836 9499
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
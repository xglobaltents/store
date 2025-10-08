'use client'

import { Metadata } from "next"
import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "Mohammed Al-Rasheed",
    company: "Event Management Solutions LLC",
    location: "Dubai, UAE",
    rating: 5,
    date: "December 2024",
    title: "Outstanding Quality and Service",
    review: "We purchased several 20x30m tents for our event management business. The quality is exceptional, and the aluminum frame is incredibly sturdy. The xGlobal team provided excellent support throughout the process, from design consultation to installation guidance. Highly recommended!",
    verified: true,
    productPurchased: "20x30m Event Tent"
  },
  {
    id: 2,
    name: "Sarah Peterson",
    company: "Desert Rose Weddings",
    location: "Abu Dhabi, UAE",
    rating: 5,
    date: "November 2024",
    title: "Perfect for Luxury Weddings",
    review: "The clear span tents we ordered are absolutely beautiful! Our clients love the elegant design and the quality of the fabric. The tents have withstood various weather conditions perfectly. Installation was straightforward with the provided instructions.",
    verified: true,
    productPurchased: "15x25m Clear Span Wedding Tent"
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    company: "Industrial Storage Solutions",
    location: "Jeddah, KSA",
    rating: 5,
    date: "November 2024",
    title: "Excellent Warehouse Solution",
    review: "We needed temporary warehouse space urgently, and xGlobal Tents delivered beyond expectations. The 30x50m industrial tent was delivered on time, and their team helped with the installation. It\'s been 6 months, and the structure is holding up perfectly.",
    verified: true,
    productPurchased: "30x50m Industrial Storage Tent"
  },
  {
    id: 4,
    name: "Lisa Chen",
    company: "Global Exhibitions Inc.",
    location: "Dubai, UAE",
    rating: 4,
    date: "October 2024",
    title: "Great for Trade Shows",
    review: "We use xGlobal tents for multiple trade shows across the GCC. The modular design allows us to adapt to different venue sizes. The only minor issue was a delay in one shipment, but customer service resolved it quickly. Overall, very satisfied with the products.",
    verified: true,
    productPurchased: "Modular Exhibition Tents"
  },
  {
    id: 5,
    name: "Khalid Al-Mahmoud",
    company: "Qatar Sports Events",
    location: "Doha, Qatar",
    rating: 5,
    date: "October 2024",
    title: "Perfect for Sporting Events",
    review: "Purchased multiple tents for a major sporting event. The quality is top-notch, and they look very professional. The AC integration worked perfectly, keeping guests comfortable even in hot weather. Will definitely order again.",
    verified: true,
    productPurchased: "25x40m Sports Event Tent"
  },
  {
    id: 6,
    name: "James Williams",
    company: "Construction Site Solutions",
    location: "Riyadh, KSA",
    rating: 5,
    date: "September 2024",
    title: "Durable and Reliable",
    review: "We\'ve been using xGlobal tents at our construction sites for worker accommodation and equipment storage. They\'ve proven to be extremely durable and weather-resistant. The 10-year frame warranty gives us peace of mind.",
    verified: true,
    productPurchased: "Multiple 10x20m Site Tents"
  },
  {
    id: 7,
    name: "Fatima Al-Zahra",
    company: "Ramadan Events Organizers",
    location: "Sharjah, UAE",
    rating: 5,
    date: "September 2024",
    title: "Excellent for Ramadan Tents",
    review: "We ordered custom Ramadan tents with specific branding and dimensions. xGlobal Tents delivered exactly what we wanted. The tents were elegant, spacious, and created the perfect atmosphere for iftar gatherings. Customer service was responsive and helpful.",
    verified: true,
    productPurchased: "Custom Ramadan Tents"
  },
  {
    id: 8,
    name: "Robert Anderson",
    company: "Outdoor Adventures Kuwait",
    location: "Kuwait City, Kuwait",
    rating: 4,
    date: "August 2024",
    title: "Good Value for Money",
    review: "Purchased several smaller tents for our outdoor adventure business. Good quality at a competitive price. The tents are easy to set up and take down, which is important for our mobile operations. Would appreciate more color options in the future.",
    verified: true,
    productPurchased: "Multiple 5x5m Adventure Tents"
  },
  {
    id: 9,
    name: "Aisha Patel",
    company: "Corporate Events Dubai",
    location: "Dubai, UAE",
    rating: 5,
    date: "August 2024",
    title: "Professional and Reliable",
    review: "We\'ve been working with xGlobal Tents for 3 years now. They consistently deliver high-quality products and their customer service is exceptional. The tents always arrive on time and in perfect condition. They\'re our go-to supplier for corporate events.",
    verified: true,
    productPurchased: "Various Event Tents"
  },
  {
    id: 10,
    name: "Hassan Al-Qassim",
    company: "Agricultural Solutions Oman",
    location: "Muscat, Oman",
    rating: 5,
    date: "July 2024",
    title: "Perfect for Agricultural Use",
    review: "We use these tents for agricultural storage and temporary greenhouse structures. The UV-resistant fabric and sturdy frame make them perfect for our needs. The modular design allows us to expand as needed. Excellent investment!",
    verified: true,
    productPurchased: "20x40m Agricultural Tents"
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [filterRating, setFilterRating] = useState<number | null>(null)

  const filteredReviews = filterRating
    ? reviews.filter((review) => review.rating === filterRating)
    : reviews

  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)

  const ratingCounts = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  }

  return (
    <div className="content-container py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Customer Reviews & Testimonials</h1>

        {/* Rating Summary */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating}</div>
              <StarRating rating={Math.round(parseFloat(averageRating))} />
              <p className="text-gray-600 mt-2">Based on {reviews.length} verified reviews</p>
              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  ✓ All Reviews Verified
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3">
                  <button
                    onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                    className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                  >
                    <span className="text-sm">{rating}</span>
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-yellow-500 h-full transition-all"
                      style={{
                        width: `${(ratingCounts[rating as keyof typeof ratingCounts] / reviews.length) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-8 text-right">
                    {ratingCounts[rating as keyof typeof ratingCounts]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Info */}
        {filterRating && (
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredReviews.length} review{filteredReviews.length !== 1 ? "s" : ""} with {filterRating} star
              {filterRating !== 1 ? "s" : ""}
            </p>
            <button
              onClick={() => setFilterRating(null)}
              className="text-blue-600 hover:underline text-sm"
            >
              Clear filter
            </button>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    {review.verified && (
                      <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                        ✓ Verified Purchase
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    {review.company} • {review.location}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Purchased: {review.productPurchased}</p>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <StarRating rating={review.rating} />
                  <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>

              <h4 className="font-semibold mb-2">{review.title}</h4>
              <p className="text-gray-700 leading-relaxed">{review.review}</p>

              <div className="mt-4 pt-4 border-t flex items-center justify-between">
                <p className="text-sm text-gray-500">Was this review helpful?</p>
                <div className="flex gap-2">
                  <button className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    Yes
                  </button>
                  <button className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    No
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write a Review CTA */}
        <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Share Your Experience</h2>
          <p className="text-gray-700 mb-6">
            Have you purchased from xGlobal Tents? We&apos;d love to hear about your experience!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Write a Review
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <svg className="w-12 h-12 text-green-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="font-semibold mb-2">100% Verified Reviews</h3>
            <p className="text-sm text-gray-600">All reviews are from verified customers who purchased our products</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <svg className="w-12 h-12 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-semibold mb-2">14+ Years of Service</h3>
            <p className="text-sm text-gray-600">Trusted by thousands of customers across the Middle East since 2010</p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <svg className="w-12 h-12 text-purple-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="font-semibold mb-2">1000+ Happy Customers</h3>
            <p className="text-sm text-gray-600">Join our growing family of satisfied customers worldwide</p>
          </div>
        </div>
      </div>
    </div>
  )
}
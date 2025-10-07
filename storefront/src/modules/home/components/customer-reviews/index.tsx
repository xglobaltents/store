'use client'

import { useState } from 'react'

const reviews = [
  {
    id: 1,
    name: "Ahmed S.",
    rating: 5,
    date: "2024-12-15",
    location: "Dubai, UAE",
    title: "Excellent Quality and Service",
    comment: "We rented a large event tent for our corporate event. The quality was outstanding and the team was very professional. Highly recommended!",
    verified: true
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 5,
    date: "2024-11-28",
    location: "Abu Dhabi, UAE",
    title: "Perfect for Our Wedding",
    comment: "xGlobal Tents provided beautiful wedding tents that made our special day even more memorable. The setup was flawless and on time.",
    verified: true
  },
  {
    id: 3,
    name: "Mohammed K.",
    rating: 4,
    date: "2024-11-10",
    location: "Sharjah, UAE",
    title: "Great Exhibition Tents",
    comment: "Used their exhibition tents for a trade show. Very sturdy and professional looking. Will definitely use again.",
    verified: true
  },
  {
    id: 4,
    name: "Fatima A.",
    rating: 5,
    date: "2024-10-22",
    location: "Dubai, UAE",
    title: "Reliable and Professional",
    comment: "This is our third time working with xGlobal Tents. They never disappoint. Always professional and the tents are top quality.",
    verified: true
  }
]

export default function CustomerReviews() {
  const [visibleReviews, setVisibleReviews] = useState(2) // Start with only 2 reviews

  const showMoreReviews = () => {
    setVisibleReviews(prev => Math.min(prev + 3, reviews.length))
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-gray-600">(156 verified reviews)</span>
          </div>
          <p className="text-gray-600">Join thousands of satisfied customers across the UAE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, visibleReviews).map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
                {review.verified && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Verified Purchase
                  </span>
                )}
              </div>
              
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <h5 className="font-medium mb-2">{review.title}</h5>
              <p className="text-sm text-gray-600 mb-3">{review.comment}</p>
              <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>

        {visibleReviews < reviews.length && (
          <div className="text-center mt-8">
            <button 
              onClick={showMoreReviews}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Show More Reviews
            </button>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">
            All reviews are from verified customers who have purchased or rented from xGlobal Tents
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>100% Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span>Direct Customer Feedback</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
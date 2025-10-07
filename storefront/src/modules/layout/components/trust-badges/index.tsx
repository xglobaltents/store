import Image from 'next/image'

export default function TrustBadges() {
  return (
    <div className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="content-container">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Why Shop With xGlobal Tents?</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* SSL Secured */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-3 flex items-center justify-center bg-green-100 rounded-full">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="font-medium text-sm">SSL Secured</h4>
            <p className="text-xs text-gray-600 mt-1">100% Safe & Secure Shopping</p>
          </div>

          {/* Verified Business */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-3 flex items-center justify-center bg-blue-100 rounded-full">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-medium text-sm">Verified Business</h4>
            <p className="text-xs text-gray-600 mt-1">UAE Trade License: 123456</p>
          </div>

          {/* Customer Reviews */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-3 flex items-center justify-center bg-yellow-100 rounded-full">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className={`w-3 h-3 ${star <= 4 ? 'text-yellow-500' : 'text-yellow-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <h4 className="font-medium text-sm">4.9/5 Rating</h4>
            <p className="text-xs text-gray-600 mt-1">156+ Verified Reviews</p>
          </div>

          {/* Money Back Guarantee */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-3 flex items-center justify-center bg-purple-100 rounded-full">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h4 className="font-medium text-sm">30-Day Returns</h4>
            <p className="text-xs text-gray-600 mt-1">Money Back Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  )
}
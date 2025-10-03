export { default as FAQSchema } from './faq-schema'
export { default as BreadcrumbSchema } from './breadcrumb-schema'
export { default as StoreRatingSchema } from './store-rating-schema'
export { default as ProductRatingSchema } from './product-rating-schema'

// Common FAQ data for different regions
export const commonFAQs = {
  ae: [
    {
      question: "Do you deliver to all Emirates?",
      answer: "Yes, we deliver to all seven Emirates in the UAE including Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payments through our secure Stripe payment system."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 2-3 business days within Dubai and Abu Dhabi, and 3-5 business days to other Emirates."
    },
    {
      question: "Do you offer tent installation services?",
      answer: "Yes, we provide professional tent installation services for large orders. Contact us at cs@xglobal-tents.com for more information."
    }
  ],
  us: [
    {
      question: "Do you ship nationwide?",
      answer: "Yes, we ship to all 50 states in the United States with standard and express shipping options available."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payments through our secure payment system."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days."
    },
    {
      question: "Do you offer tent setup services?",
      answer: "We provide tent setup guides and customer support. For professional installation, contact us at cs@xglobal-tents.com."
    }
  ]
}
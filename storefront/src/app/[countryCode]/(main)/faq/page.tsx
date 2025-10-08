'use client'

import { Metadata } from "next"
import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const faqs = [
  {
    category: "General Questions",
    items: [
      {
        question: "What types of tents does xGlobal Tents manufacture?",
        answer: "We manufacture a wide range of aluminum frame tents, including event tents, exhibition tents, warehouse structures, industrial tents, wedding marquees, and custom modular structures. Our tents range from small 3x3m units to large 50m+ clear span structures."
      },
      {
        question: "Where is xGlobal Tents located?",
        answer: "Our main manufacturing facility and showroom are located in Dubai, UAE, at Technopark - Mina Jebel Ali. We also have operations in Saudi Arabia and serve clients across the GCC region and internationally."
      },
      {
        question: "How long has xGlobal Tents been in business?",
        answer: "xGlobal Tents was established in 2010 and has over 14 years of experience in manufacturing and supplying premium tent solutions. We are ISO 9001:2015 certified and a registered member of Dubai Chamber of Commerce."
      },
      {
        question: "Do you offer tent rentals or only sales?",
        answer: "We primarily focus on tent sales and manufacturing. However, for large events and special projects in the UAE, we do offer rental options. Please contact our sales team to discuss rental availability for your specific needs."
      }
    ]
  },
  {
    category: "Products & Customization",
    items: [
      {
        question: "Can I customize the size and design of my tent?",
        answer: "Yes! We specialize in custom tent solutions. You can customize dimensions, colors, sidewall options, flooring, doors, windows, and branding. Our design team will work with you to create the perfect tent for your needs."
      },
      {
        question: "What materials are used in your tents?",
        answer: "Our tents feature high-grade aluminum alloy frames (6061-T6) for strength and durability. The covers are made from PVC-coated polyester fabric (650-900 GSM) that is waterproof, UV-resistant, and flame-retardant (meeting international fire safety standards)."
      },
      {
        question: "What sizes are available?",
        answer: "We offer standard widths from 3m to 50m, with unlimited length in 3m or 5m increments. Popular sizes include 10x10m, 15x30m, 20x40m, and 25x50m. Custom sizes are available upon request."
      },
      {
        question: "Are your tents suitable for permanent installation?",
        answer: "Yes, many of our tent models are engineered for semi-permanent and permanent installations. They can withstand winds up to 100 km/h and are suitable for year-round use with proper maintenance."
      },
      {
        question: "Do you provide flooring systems?",
        answer: "Yes, we offer various flooring options including wooden platforms, interlocking tiles, carpet systems, and glass flooring for special events. Flooring can be integrated with your tent order."
      }
    ]
  },
  {
    category: "Ordering & Pricing",
    items: [
      {
        question: "How do I get a quote for my tent requirements?",
        answer: "You can request a quote by calling us at 04 836 9499, emailing cs@xglobal-tents.com, or visiting our website at xglobal-tents.com. Please provide details about size, quantity, location, and intended use for an accurate quote."
      },
      {
        question: "What is the minimum order quantity?",
        answer: "We accept orders starting from a single tent unit. There is no minimum order quantity, whether you need one tent or a hundred."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfers, major credit cards (Visa, MasterCard, American Express), and Letter of Credit (L/C) for international orders. For large orders, we offer flexible payment terms."
      },
      {
        question: "Do you require a deposit for custom orders?",
        answer: "Yes, custom orders require a 50% deposit upon order confirmation. The remaining balance is due before shipping. Standard products may have different payment terms."
      },
      {
        question: "Are prices inclusive of VAT?",
        answer: "Prices displayed are exclusive of VAT unless otherwise stated. VAT (currently 5% in UAE) will be added at checkout for applicable orders."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship worldwide. We have extensive experience shipping to Saudi Arabia, Kuwait, Qatar, Bahrain, Oman, and beyond. International shipping costs and times vary by destination."
      },
      {
        question: "How long does delivery take?",
        answer: "Standard products: 1-3 days within UAE, 3-7 days for GCC countries. Custom orders: 2-4 weeks depending on specifications. International shipping: 2-4 weeks depending on destination and customs clearance."
      },
      {
        question: "Is installation included with delivery?",
        answer: "Installation is available as an additional service for orders above AED 5,000. Our professional team can handle complete setup. Installation costs vary based on tent size and location."
      },
      {
        question: "Can I track my order?",
        answer: "Yes, once your order ships, you'll receive a tracking number via email. You can also track your order status through your account on our website."
      },
      {
        question: "What if my order arrives damaged?",
        answer: "Inspect your order upon delivery and report any damage within 48 hours with photos. We will arrange for replacement or refund as per our shipping policy."
      }
    ]
  },
  {
    category: "Installation & Maintenance",
    items: [
      {
        question: "Do your tents come with installation instructions?",
        answer: "Yes, all tents come with detailed installation manuals, video guides, and technical drawings. Our support team is available to provide guidance during installation."
      },
      {
        question: "How many people are needed to install a tent?",
        answer: "Small tents (up to 10x10m): 2-4 people. Medium tents (10x20m to 20x30m): 4-8 people. Large tents (30m+ width): Professional installation team recommended."
      },
      {
        question: "How do I maintain my tent?",
        answer: "Regular cleaning with mild soap and water, checking and tightening bolts periodically, proper storage when not in use, and annual professional inspection for permanent installations. We provide a detailed maintenance guide with each purchase."
      },
      {
        question: "What is the lifespan of your tents?",
        answer: "With proper maintenance, our aluminum frame tents last 15-20 years. The PVC covers typically last 5-10 years depending on usage and environmental conditions. Replacement covers are available."
      },
      {
        question: "Can tents be relocated after installation?",
        answer: "Yes, our modular tent systems are designed for easy disassembly and relocation. All components are reusable and the modular design allows for reconfiguration."
      }
    ]
  },
  {
    category: "Returns & Warranty",
    items: [
      {
        question: "What is your return policy?",
        answer: "Orders can be cancelled within 6 hours for a full refund. Damaged or defective products can be returned within 30 days. Custom-made products are non-returnable unless defective."
      },
      {
        question: "What warranty do you offer?",
        answer: "Aluminum frames: 10-year warranty against manufacturing defects. PVC covers: 2-year warranty. Accessories: 1-year warranty. Warranty covers manufacturing defects, not damage from misuse or natural wear."
      },
      {
        question: "How do I claim warranty service?",
        answer: "Contact us with your order number, photos of the issue, and description of the problem. We'll assess the claim and provide repair, replacement, or refund as appropriate."
      },
      {
        question: "Are spare parts available?",
        answer: "Yes, we maintain inventory of all spare parts including joints, pins, bolts, and fabric sections. Parts can be ordered directly through our customer service team."
      }
    ]
  },
  {
    category: "Technical Specifications",
    items: [
      {
        question: "What wind speeds can your tents withstand?",
        answer: "Our standard tents are rated for winds up to 100 km/h (62 mph). Heavy-duty models can withstand up to 120 km/h. All tents must be properly anchored according to specifications."
      },
      {
        question: "Are your tents waterproof?",
        answer: "Yes, all our tent fabrics are 100% waterproof with sealed seams. The PVC-coated polyester material prevents water penetration and includes proper drainage design."
      },
      {
        question: "What certifications do your tents have?",
        answer: "Our tents meet international standards including: DIN 4102 B1/M2 flame retardancy, UV resistance certification, ISO 9001:2015 quality management, and CE marking for European markets."
      },
      {
        question: "Can your tents be air-conditioned or heated?",
        answer: "Yes, our tents are compatible with HVAC systems. We can integrate AC/heating ducting, and the fabric provides good insulation. We also offer specialized insulated tent options."
      },
      {
        question: "What is the maximum clear span available?",
        answer: "We offer clear span structures up to 50 meters wide with no internal pillars. Larger widths are possible with modular connections."
      }
    ]
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        className="py-4 px-2 w-full text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-2 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>("General Questions")

  return (
    <div className="content-container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8">
          Find answers to common questions about our tents, services, and policies.
          Can&apos;t find what you&apos;re looking for? Contact us at{" "}
          <a href="mailto:cs@xglobal-tents.com" className="text-blue-600 hover:underline">
            cs@xglobal-tents.com
          </a>
        </p>

        <div className="space-y-8">
          {faqs.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                className="w-full px-6 py-4 bg-gray-50 text-left flex justify-between items-center rounded-t-lg hover:bg-gray-100 transition-colors"
                onClick={() =>
                  setOpenCategory(openCategory === category.category ? null : category.category)
                }
              >
                <h2 className="text-xl font-semibold text-gray-900">{category.category}</h2>
                <ChevronDownIcon
                  className={`w-6 h-6 text-gray-500 transition-transform ${
                    openCategory === category.category ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openCategory === category.category && (
                <div className="px-6">
                  {category.items.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Still Have Questions?</h3>
          <p className="text-blue-700 mb-4">
            Our customer service team is here to help you with any questions about our tents and services.
          </p>
          <div className="space-y-2 text-blue-700">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:cs@xglobal-tents.com" className="underline">
                cs@xglobal-tents.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> 04 836 9499
            </p>
            <p>
              <strong>WhatsApp:</strong> +971 4 836 9499
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://xglobal-tents.com" target="_blank" rel="noopener noreferrer" className="underline">
                xglobal-tents.com
              </a>
            </p>
            <p>
              <strong>Hours:</strong> Sunday - Thursday, 9 AM - 6 PM (GST)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
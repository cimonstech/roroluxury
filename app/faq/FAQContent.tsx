"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "How do I place an order?",
    a: "You can place an order by contacting us via WhatsApp, email, or our contact form. We'll guide you through the process and help you choose the perfect fixture for your space.",
  },
  {
    q: "Do you offer installation services?",
    a: "Yes, we offer installation services for our lighting fixtures in Accra and surrounding areas. Contact us to discuss your project and schedule a consultation.",
  },
  {
    q: "What is your delivery area?",
    a: "We deliver across Accra and Greater Accra. For locations outside Accra, please reach out and we'll do our best to accommodate you.",
  },
  {
    q: "Can I customize a fixture?",
    a: "Many of our pieces can be customized in finish, size, or configuration. Share your vision with us and we'll explore the possibilities.",
  },
  {
    q: "What is your return policy?",
    a: "We stand behind the quality of our fixtures. If you receive a defective item, contact us within 7 days and we'll arrange a replacement or refund.",
  },
  {
    q: "How do I care for my Roro fixture?",
    a: "Use a soft, dry cloth for regular dusting. Avoid harsh chemicals. For crystal or glass elements, a gentle wipe with a damp cloth is sufficient.",
  },
];

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-[800px] mx-auto px-8 md:px-20 py-24">
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            className="border-b border-roro-grey/20 last:border-0"
            data-cursor-hover
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-6 flex items-center justify-between gap-4 text-left cursor-none"
            >
              <span className="font-cormorant italic text-roro-black text-lg md:text-xl">
                {item.q}
              </span>
              <span
                className="font-syncopate text-roro-grey text-xl shrink-0 transition-transform duration-200"
                style={{
                  transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-out"
              style={{
                maxHeight: openIndex === i ? 500 : 0,
              }}
            >
              <p className="font-jost font-light text-roro-grey text-base leading-relaxed pb-6">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

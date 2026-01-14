"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do crystals work?",
    answer:
      "Crystals are believed to interact with your energy field and help restore balance, calmness, and positivity."
  },
  {
    question: "Who can wear crystal bracelets?",
    answer:
      "Anyone can wear crystal bracelets regardless of age or gender. They are safe and easy to wear."
  },
  {
    question: "How do I choose the right crystal?",
    answer:
      "You can choose a crystal based on your intention, zodiac sign, or the energy you wish to attract."
  },
  {
    question: "Can I wear more than one crystal?",
    answer:
      "Yes, you can wear multiple crystals together as long as their energies complement each other."
  },
  {
    question: "How do I know your crystals are natural?",
    answer:
      "Our crystals are ethically sourced, untreated, and individually checked for authenticity."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 px-2">
      <div className="max-w-6xl mx-auto bg-[#C15E14] rounded-2xl px-6 py-9">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-serif text-white mb-3">
              You Asked, We Answered
            </h2>

            <p className="text-base text-white/85 mb-5">
              Everything you need to know before you bring the magic home.
            </p>
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-0">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-b border-white/30 last:border-b-0"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="pb-4 pr-6 text-sm text-white/85 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

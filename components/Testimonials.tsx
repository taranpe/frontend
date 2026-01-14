"use client";

import { useState } from "react";

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      text: `I tried so many medicines to treat my acnes and pimples but nothing was working.
      I can proudly say that after wearing Crystal Bracelet my skin issues disappear magically.
      Wow! I have recommended this remedy to my friends also.`,
      name: "Balasaheb SV",
    },
    {
      text: `After wearing this Rudraksha it seems like problems were never there in my life.
      It is magical, divine, outstanding Rudraksha. It has worked like a magic wind
      on my married and financial life. Gratitude`,
      name: "Sangeeta Jain",
    },
    {
      text: `I ordered it for my daughter to present on her birthday, but I received it
      2 days after her birthday. However, she is happy with the present and the
      product is worth its price. But please make your delivery fast.`,
      name: "Dr. Purvi Koparde",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADING */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Voices of Gratitude
          </h2>
          <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
            Real experiences from people who found clarity and guidance through our services
          </p>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#f3f3f1] rounded-xl p-7 text-left"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-500 text-sm">★</span>
                ))}
              </div>

              <p className="text-sm text-gray-800 leading-relaxed mb-8">
                {item.text}
              </p>

              <p className="text-sm font-semibold text-black">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="md:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full px-1"
              >
                <div className="bg-[#f3f3f1] rounded-xl p-7 text-left">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-orange-500 text-sm">★</span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-800 leading-relaxed mb-8">
                    {item.text}
                  </p>

                  <p className="text-sm font-semibold text-black">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center text-gray-700"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center text-gray-700"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}

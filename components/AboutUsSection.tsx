"use client";

import Link from "next/link";

export default function AboutUsSection() {
  return (
    <section className="w-full bg-[#faf6ef] py-12">
      {/* ↑ pehle py-20 tha, ab kam kar diya */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE (ORIGINAL SIZE) */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/about.png"
              alt="Astrologer Rajni Kapoor"
              className="max-w-full h-auto rounded-xl" // ← added rounded-xl
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#b1120a] uppercase mb-3">
              ॐ Founder AskRajni
            </p>

            <h2 className="text-4xl font-serif text-[#111] mb-6">
              Astrologer Rajni Kapoor
            </h2>

            <p className="text-[15px] leading-relaxed text-gray-700 mb-4 text-justify">
              Astrologer Rajni Kapoor is a renowned name in the world of astrology,
              known for her scientific approach, deep wisdom, and compassionate
              guidance. With 21+ years of experience and over 21,000 unique
              horoscopes analyzed, she stands as one of the most trusted
              astrologers in Ludhiana and across India.
            </p>

            <p className="text-[15px] leading-relaxed text-gray-700 mb-8 text-justify">
              Her expertise spans across KP Astrology, Nadi Astrology, Lal Kitab,
              and Vastu Shastra, offering clients holistic, practical, and highly
              personalized solutions to life’s most pressing issues—be it love,
              career, marriage, health, or finances.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#b1120a] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#8f0e08] transition"
            >
              Know More →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

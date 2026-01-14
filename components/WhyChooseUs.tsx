"use client";

import { Sparkles, UserCheck, Target } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#2a1408] via-[#1f0f06] to-[#140804] text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#A35013] to-[#f2c94c] bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We combine ancient wisdom with modern understanding to deliver
            accurate, meaningful, and practical guidance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10 hover:border-[#A35013] transition-all duration-300 hover:-translate-y-2 shadow-2xl">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#A35013]/20 text-[#f2c94c] mb-6 group-hover:scale-110 transition">
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Expert Astrologers
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our team consists of certified astrologers with years of experience
              and deep knowledge of both traditional and modern techniques.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10 hover:border-[#A35013] transition-all duration-300 hover:-translate-y-2 shadow-2xl">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#A35013]/20 text-[#f2c94c] mb-6 group-hover:scale-110 transition">
              <UserCheck size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Personalized Approach
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We believe in providing individualized readings that focus on your
              specific questions, goals, and life circumstances.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10 hover:border-[#A35013] transition-all duration-300 hover:-translate-y-2 shadow-2xl">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#A35013]/20 text-[#f2c94c] mb-6 group-hover:scale-110 transition">
              <Target size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Practical Guidance
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our guidance goes beyond predictions to give you clear, actionable
              insights you can apply in your daily life.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

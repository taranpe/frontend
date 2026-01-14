export default function TestimonialSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADING (UNCHANGED) */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Voices of Gratitude
          </h2>
          <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
            Real experiences from people who found clarity and guidance through our services
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* TESTIMONIAL 1 */}
          <div className="bg-[#f3f3f1] rounded-xl p-7 text-left">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-500 text-sm">★</span>
              ))}
            </div>

            {/* Content */}
            <p className="text-sm text-gray-800 leading-relaxed mb-8">
              I tried so many medicines to treat my acnes and pimples but nothing was working.
              I can proudly say that after wearing Crystal Bracelet my skin issues disappear magically.
              Wow! I have recommended this remedy to my friends also.
            </p>

            {/* Name */}
            <p className="text-sm font-semibold text-black">
              Balasaheb SV
            </p>
          </div>

          {/* TESTIMONIAL 2 */}
          <div className="bg-[#f3f3f1] rounded-xl p-7 text-left">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-500 text-sm">★</span>
              ))}
            </div>

            {/* Content */}
            <p className="text-sm text-gray-800 leading-relaxed mb-8">
              After wearing this Rudraksha it seems like problems were never there in my life.
              It is magical, divine, outstanding Rudraksha. It has worked like a magic wind
              on my married and financial life. Gratitude
            </p>

            {/* Name */}
            <p className="text-sm font-semibold text-black">
              Sangeeta Jain
            </p>
          </div>

          {/* TESTIMONIAL 3 */}
          <div className="bg-[#f3f3f1] rounded-xl p-7 text-left">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-500 text-sm">★</span>
              ))}
            </div>

            {/* Content */}
            <p className="text-sm text-gray-800 leading-relaxed mb-8">
              I ordered it for my daughter to present on her birthday, but I received it
              2 days after her birthday. However, she is happy with the present and the
              product is worth its price. But please make your delivery fast.
            </p>

            {/* Name */}
            <p className="text-sm font-semibold text-black">
              Dr. Purvi Koparde
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

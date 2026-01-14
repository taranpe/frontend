import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADING */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Astrology Services You Can Trust
          </h2>
          <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
            Expert-guided astrological services designed to bring clarity and positivity
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* SERVICE 1 */}
          <div className="border border-gray-200 bg-white">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-24iAYdthMK6q5wMg3g-tLkUTSPFjGe9yA&s"
              alt="Numerology Name Suggestion"
              className="w-full h-[220px] object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-sm font-medium text-gray-900">
                Numerology Name Suggestion Report
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Improve luck, success & harmony through name correction
              </p>
              <Link
                href="/services/numerology-name-suggestion"
                className="mt-3 inline-block w-full border border-[#B84612] text-[#B84612] py-2 text-sm font-medium hover:bg-[#B84612] hover:text-white transition-colors"
              >
                Book Your Service
              </Link>
            </div>
          </div>

          {/* SERVICE 2 */}
          <div className="border border-gray-200 bg-white">
            <img
              src="https://assets.ganeshaspeaks.com/wp-content/uploads/2024/09/Shubh-Muhurat-2025.webp"
              alt="Shubh Muhurat"
              className="w-full h-[220px] object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-sm font-medium text-gray-900">
                Shubh Muhurat Suggestion
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Auspicious timing for marriage, business & important events
              </p>
              <Link
                href="/services/shubh-muhurat"
                className="mt-3 inline-block w-full border border-[#B84612] text-[#B84612] py-2 text-sm font-medium hover:bg-[#B84612] hover:text-white transition-colors"
              >
                Book Your Service
              </Link>
            </div>
          </div>

          {/* SERVICE 3 */}
          <div className="border border-gray-200 bg-white">
            <img
              src="https://deshpandepanchang.com/wp-content/uploads/2021/07/kndli-image_5e60fdc66100a.png"
              alt="Kundali Matching"
              className="w-full h-[220px] object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-sm font-medium text-gray-900">
                Kundali Matching for Marriage
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Detailed horoscope compatibility & dosha analysis
              </p>
              <Link
                href="/services/kundali-matching"
                className="mt-3 inline-block w-full border border-[#B84612] text-[#B84612] py-2 text-sm font-medium hover:bg-[#B84612] hover:text-white transition-colors"
              >
                Book Your Service
              </Link>
            </div>
          </div>

          {/* SERVICE 4 */}
          <div className="border border-gray-200 bg-white">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cGk4CB2g4iUxUWnaW7q64oLNXpvJlBYB4Q&s"
              alt="Lucky Crystal"
              className="w-full h-[220px] object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-sm font-medium text-gray-900">
                Lucky Crystal Suggestion
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Personalized crystal guidance for energy & protection
              </p>
              <Link
                href="/services/lucky-crystal"
                className="mt-3 inline-block w-full border border-[#B84612] text-[#B84612] py-2 text-sm font-medium hover:bg-[#B84612] hover:text-white transition-colors"
              >
                Book Your Service
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

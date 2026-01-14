import Link from "next/link";

export default function ShopByCollection() {
  return (
    <section className="py-16 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Shop by Concern
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Discover personalized astrology guidance for every life area
          </p>
        </div>

        {/* COLLECTION GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* LOVE */}
          <Link href="/collections/love" className="group text-center">
            <div className="overflow-hidden rounded-xl shadow-sm">
              <img
                src="/img1.jpg"
                alt="Love Astrology"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-sm font-medium tracking-wide text-gray-800">
              Love & Relationships
            </p>
          </Link>

          {/* CAREER */}
          <Link href="/collections/career" className="group text-center">
            <div className="overflow-hidden rounded-xl shadow-sm">
              <img
                src="/img2.jpg"
                alt="Career Astrology"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-sm font-medium tracking-wide text-gray-800">
              Career & Business
            </p>
          </Link>

          {/* MARRIAGE */}
          <Link href="/collections/marriage" className="group text-center">
            <div className="overflow-hidden rounded-xl shadow-sm">
              <img
                src="/img3.jpg"
                alt="Marriage Astrology"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-sm font-medium tracking-wide text-gray-800">
              Study
            </p>
          </Link>

          {/* HEALTH */}
          <Link href="/collections/health" className="group text-center">
            <div className="overflow-hidden rounded-xl shadow-sm">
              <img
                src="/img4.jpg"
                alt="Health Astrology"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-sm font-medium tracking-wide text-gray-800">
              Health & Wellness
            </p>
          </Link>

        </div>
      </div>
    </section>
  );
}

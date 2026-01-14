import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Ask Rajni
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Trusted astrology guidance for love, career, marriage and life
              decisions. Get clarity through ancient wisdom.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/collections" className="hover:text-white">Collections</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/collections/love" className="hover:text-white">Love Astrology</Link></li>
              <li><Link href="/collections/career" className="hover:text-white">Career Guidance</Link></li>
              <li><Link href="/collections/marriage" className="hover:text-white">Marriage Matching</Link></li>
              <li><Link href="/collections/health" className="hover:text-white">Health Reading</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@askrajni.com</li>
              <li>WhatsApp: +91-6239790901</li>
              <li>Location:Shop No. 3, Ground Floor, MIG Flat No. 3347, Phase 2, Adjoining Gate No. 7, Urban Estate Dugri, Ludhiana, 141013 </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ask Rajni. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

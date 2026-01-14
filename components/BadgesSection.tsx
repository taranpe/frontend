"use client";

import { Clock, ShieldCheck, Star } from "lucide-react";

export default function BadgesSection() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Badge 1 */}
          <div className="flex items-start gap-4 bg-[#f8f7f4] border border-gray-200 rounded-xl p-6 hover:border-[#A35013] transition shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#A35013]">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                24×7 Service
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get astrology guidance anytime, anywhere with round-the-clock
                availability.
              </p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-start gap-4 bg-[#f8f7f4] border border-gray-200 rounded-xl p-6 hover:border-[#A35013] transition shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#A35013]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                100% Privacy
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your personal details and consultations are fully secure and
                confidential.
              </p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-start gap-4 bg-[#f8f7f4] border border-gray-200 rounded-xl p-6 hover:border-[#A35013] transition shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#A35013]">
              <Star size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Trusted by Thousands
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thousands of satisfied users trust us for accurate and reliable
                astrology guidance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

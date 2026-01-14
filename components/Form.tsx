"use client";

export default function DailyHoroscopeForm() {
  return (
    <section className="py-16 bg-orange-500">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Get Your Daily Horoscope
        </h2>

        {/* Form */}
        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3 border border-white rounded-lg w-full md:w-60 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white bg-white"
          />

          {/* DOB */}
          <input
            type="date"
            placeholder="Date of Birth"
            className="px-4 py-3 border border-white rounded-lg w-full md:w-60 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white bg-white"
          />

          {/* City */}
          <input
            type="text"
            placeholder="City"
            className="px-4 py-3 border border-white rounded-lg w-full md:w-60 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white bg-white"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

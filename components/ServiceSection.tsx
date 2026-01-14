"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Numerology Name Suggestion Report",
    desc: "Improve luck, success & harmony through name correction",
    image:
      "/5.png",
    link: "/services/numerology-name-suggestion",
  },
  {
    title: "Shubh Muhurat Suggestion",
    desc: "Auspicious timing for marriage, business & events",
    image:
      "/6.png",
    link: "/services/shubh-muhurat",
  },
  {
    title: "Kundali Matching for Marriage",
    desc: "Detailed horoscope compatibility & dosha analysis",
    image:
      "/7.png",
    link: "/services/kundali-matching",
  },
  {
    title: "Lucky Crystal Suggestion",
    desc: "Personalized crystal guidance for energy & protection",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cGk4CB2g4iUxUWnaW7q64oLNXpvJlBYB4Q&s",
    link: "/services/lucky-crystal",
  },
];

export default function ServicesSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Our Astrology Services You Can Trust
          </h2>
          <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
            Expert-guided astrological services designed to bring clarity
          </p>
        </div>

        {/* ================= MOBILE GRID (2x2) ================= */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3 text-center">
                <h3 className="text-xs font-medium text-gray-900 truncate">
                  {service.title}
                </h3>

                <p className="mt-1 text-[11px] text-gray-600 line-clamp-2">
                  {service.desc}
                </p>

                <Link
                  href={service.link}
                  className="mt-3 block w-full rounded-md border border-[#B84612] text-[#B84612] py-1.5 text-xs font-medium hover:bg-[#B84612] hover:text-white transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP SLIDER ================= */}
        <div className="hidden md:block">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="px-2 flex justify-center">
                <div className="border border-gray-200 rounded-lg overflow-hidden bg-white w-[380px]">

                  <div className="w-full h-[400px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {service.desc}
                    </p>

                    <Link
                      href={service.link}
                      className="mt-4 block w-full rounded-md border border-[#B84612] text-[#B84612] py-2 text-sm font-medium hover:bg-[#B84612] hover:text-white transition"
                    >
                      Book Your Service
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Slider from "react-slick";
import { ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const collections = [
  { name: "Rudrakshas", image: "https://astrotalk.store/cdn/shop/files/7_mukhi_n.webp?v=1754983985&width=750", href: "/collections/rudrakshas" },
  { name: "Bracelet", image: "https://images-cdn.ubuy.co.in/667e0360751611106f1bd7ea-ronglry-zodiac-bracelet-for-women-men-12.jpg", href: "/collections/bracelet" },
  { name: "Gemstones", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTANwlWQEKMT3Duy86mu1AAbSTVH_J2QnYQ&s", href: "/collections/gemstones" },
  { name: "Vastu Remedies", image: "https://m.media-amazon.com/images/I/51ZhWXuVn7L._SY300_SX300_QL70_ML2_.jpg", href: "/collections/vastu" },
  { name: "Crystal Balls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfA_q_0yA29X-szID7fu-VWtrmhOYlMYskQ&s", href: "/collections/crystal-balls" },
  { name: "Activator", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pKs4k5aMl_yKwOagDeVCYq1_lbUs1Oel0Q&s", href: "/collections/activator" },
];

export default function PerfectSelections() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Perfect Selections for You
          </h2>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <Slider {...settings}>
            {collections.map((item, index) => (
              <div key={index} className="px-2">
                <div className="text-center group">

                  {/* IMAGE WITH HOVER */}
                  <div className="rounded-xl overflow-hidden bg-gray-50 transition-all duration-300 group-hover:shadow-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-3 text-base font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  {/* LINK */}
                  <Link
                    href={item.href}
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-gray-700 underline underline-offset-4 hover:text-black transition"
                  >
                    Shop Collection <ArrowRight size={14} />
                  </Link>

                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* MOBILE */}
        <div className="flex gap-4 overflow-x-auto md:hidden scrollbar-hide">
          {collections.map((item, index) => (
            <div key={index} className="min-w-[200px] text-center group">
              <div className="rounded-xl overflow-hidden bg-gray-50 transition-all duration-300 group-hover:shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[170px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-3 text-base font-semibold text-gray-900">
                {item.name}
              </h3>

              <Link
                href={item.href}
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-gray-700 underline underline-offset-4"
              >
                Shop Collection <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

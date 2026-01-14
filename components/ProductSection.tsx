"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    name: "Rudraksha Report - A Complete Guide",
    price: "Rs. 17000",
    image: "/1.png",
  },
  {
    name: "Dhan Yog Bracelet - Brings Wealth",
    price: "Rs. 690.00",
    image: "/2.png",
  },
  {
    name: "Green Aventurine Bracelet",
    price: "Rs. 690.00",
    image: "/3.png",
  },
  {
    name: "7 Mukhi Rudraksha - Nepal",
    price: "Rs. 690.00",
    image: "/4.png",
  },
];

export default function ProductSection() {
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
        </div>

        {/* ================= MOBILE GRID (2x2) ================= */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <div className="w-full h-[200px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3 text-center">
                <h3 className="text-xs font-medium text-gray-900 truncate">
                  {product.name}
                </h3>

                <div className="mt-2">
                  <span className="text-sm font-semibold text-red-600">
                    {product.price}
                  </span>
                </div>

                <button className="mt-3 w-full rounded-md border border-[#B84612] text-[#B84612] py-1.5 text-xs font-medium hover:bg-[#B84612] hover:text-white transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP SLIDER ================= */}
        <div className="hidden md:block">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-2 flex justify-center">
                <div className="border border-gray-200 rounded-lg overflow-hidden bg-white w-[380px]">

                  <div className="w-full h-[400px] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </h3>

                    <div className="mt-2">
                      <span className="text-base font-semibold text-red-600">
                        {product.price}
                      </span>
                    </div>

                    <button className="mt-4 w-full rounded-md border border-[#B84612] text-[#B84612] py-2 text-sm font-medium hover:bg-[#B84612] hover:text-white transition">
                      Buy Now
                    </button>
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

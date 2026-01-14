"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductSection() {
  const products = [
    {
      name: "Rudraksha Report - A Complete Guide",
      price: "Rs. 0.00",
      oldPrice: "Rs. 1,500.00",
      image: "/1.png",
    },
    {
      name: "Dhan Yog Bracelet - Brings Wealth",
      price: "Rs. 690.00",
      oldPrice: "Rs. 1,050.00",
      image: "/2.png",
    },
    {
      name: "Green Aventurine Bracelet",
      price: "Rs. 690.00",
      oldPrice: "Rs. 996.00",
      image: "/3.png",
    },
    {
      name: "7 Mukhi Rudraksha - Nepal",
      price: "Rs. 690.00",
      oldPrice: "Rs. 960.00",
      image: "/4.png",
    },
    {
      name: "Amethyst Bracelet - For Business",
      price: "Rs. 690.00",
      oldPrice: "Rs. 996.00",
      image: "/1.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 cards visible on desktop
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION HEADING */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
       Our Astrology Services You Can Trust
          </h2>
        </div>

        {/* PRODUCT SLIDER */}
        <Slider {...settings} className="space-x-4">
          {products.map((product, index) => (
            <div key={index} className="px-2 flex justify-center">
              <div className="group border border-gray-200 rounded-lg overflow-hidden bg-white w-[400px]">

                {/* IMAGE */}
                <div className="w-[400px] h-[415px] flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* PRODUCT INFO */}
                <div className="p-4 text-center">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {product.name}
                  </h3>
                  <div className="mt-1 flex justify-center space-x-2 items-center">
                    <span className="text-base font-semibold text-red-600">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm line-through text-gray-400">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>

                  {/* BUY NOW BUTTON */}
                  <button className="mt-4 w-full rounded-md border border-[#B84612] text-[#B84612] py-2 text-sm font-medium hover:bg-[#B84612] hover:text-white transition-colors duration-300">
                    Buy Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Slider from "react-slick";
import { Heart, Eye, Shuffle } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Selenite Shree Yantra Charging Plate",
    image: "https://www.pandit.com/cdn/shop/files/selenite_shree_yantra_charging_plate_main_product_image_07.webp?v=1714487794&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 4,
    reviews: 6,
    discount: "-19%",
  },
  {
    title: "Selenite Vyapar Vridhi Yantra Charging Plate",
    image: "https://www.pandit.com/cdn/shop/files/selenite_vyapar_vridhi_yantra_charging_plate_main_product_image_204-min.webp?v=1728966768&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 4,
    reviews: 2,
    discount: "-19%",
  },
  {
    title: "Selenite Shree Yantra Square Charging Bowl",
    image: "https://www.pandit.com/cdn/shop/files/selenite_square_charging_bowl_with_shree_yantra_main_product_image_15.webp?v=1749710968&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 5,
    reviews: 3,
    discount: "-19%",
  },
  {
    title: "Selenite Om Symbol Square Charging Bowl",
    image: "https://www.pandit.com/cdn/shop/files/selenite_om_symbol_square_charging_bowl_main_product_image_09.webp?v=1745646243&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 4,
    reviews: 5,
    discount: "-19%",
  },
  {
    title: "Selenite Urja Yantra Square Charging Bowl",
    image: "https://www.pandit.com/cdn/shop/files/selenite_urja_yantra_square_charging_bowl_main_product_image_06.jpg?v=1745556686&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 5,
    reviews: 4,
    discount: "-19%",
  },
];

export default function ServicesSection() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
    Light Up Your Aura with Selenite
          </h2>
        </div>

        {/* ================= MOBILE GRID (2 x 2) ================= */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {services.map((item, index) => (
            <div key={index} className="group">

              {/* IMAGE */}
              <div className="relative rounded-xl overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {item.discount && (
                  <span className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {item.discount}
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                  {item.title}
                </h3>

                <div className="mt-1 flex items-center gap-1 text-yellow-500 text-xs">
                  {"★".repeat(item.rating)}
                  <span className="text-gray-600 ml-1">
                    ({item.reviews})
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-gray-400 line-through text-xs">
                    {item.oldPrice}
                  </span>
                  <span className="text-red-600 font-semibold text-sm">
                    {item.price}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ================= DESKTOP SLIDER ================= */}
        <div className="hidden md:block">
          <Slider {...settings}>
            {services.map((item, index) => (
              <div key={index} className="px-3">
                <div className="group relative">

                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {item.discount && (
                      <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {item.discount}
                      </span>
                    )}

                    {/* Hover Icons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                      <button className="bg-black/70 p-2 rounded">
                        <Eye size={16} className="text-white" />
                      </button>
                      <button className="bg-black/70 p-2 rounded">
                        <Heart size={16} className="text-white" />
                      </button>
                      <button className="bg-black/70 p-2 rounded">
                        <Shuffle size={16} className="text-white" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-1 text-yellow-500 text-sm">
                      {"★".repeat(item.rating)}
                      <span className="text-gray-600 ml-1">
                        ({item.reviews} Reviews)
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">
                        {item.oldPrice}
                      </span>
                      <span className="text-red-600 font-semibold text-base">
                        {item.price}
                      </span>
                    </div>
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

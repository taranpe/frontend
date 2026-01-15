"use client";

import { Heart, Eye, Shuffle } from "lucide-react";

const services = [
  {
    title: "Dhan Yog Bracelet - Brings Money & Wealth",
    image: "https://www.pandit.com/cdn/shop/files/1_d5c30a96-768f-4302-b778-4c53e31bc2d5.png?v=1763017460&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 4,
    reviews: 6,
    discount: "-19%",
  },
  {
    title: "Nazar Bracelet For Men & Women",
    image: "https://www.pandit.com/cdn/shop/files/1.png?v=1762942279&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 4,
    reviews: 2,
    discount: "-19%",
  },
  {
    title: "Rare Natural Bodhi Seeds Evil Eye",
    image: "https://www.pandit.com/cdn/shop/files/rare_natural_bodhi_seeds_evil_eye_main_product_image_06.webp?v=1747382004&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 5,
    reviews: 3,
    discount: "-19%",
  },
  {
    title: "Rudraksha Bracelet with Brass Capping",
    image: "https://www.pandit.com/cdn/shop/files/rudraksha_braceket.png?v=1767092133&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 4,
    reviews: 5,
    discount: "-19%",
  },
  {
    title: "Selenite Star Shape Bowl",
    image: "https://www.pandit.com/cdn/shop/files/selenite_star_shape_bowl_main_product_image_06.webp?v=1747381919&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 5,
    reviews: 4,
    discount: "-19%",
  },
  {
    title: "Amethyst Adjustable Ring",
    image: "https://www.pandit.com/cdn/shop/files/amethyst_adjustable_ring_main_product_image_06_design_2.webp?v=1748602355&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 4,
    reviews: 7,
    discount: "-19%",
  },
  {
    title: "Peridot Adjustable Ring",
    image: "https://www.pandit.com/cdn/shop/files/peridot_adjustable_ring_1_main_product_image_07.webp?v=1748685389&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 5,
    reviews: 8,
    discount: "-19%",
  },
  {
    title: "Selenite Flower of Life with 7 Chakra Square Charging Bowl",
    image: "https://www.pandit.com/cdn/shop/files/selenite_flower_of_life_with_7_chakra_square_charging_bowl_main_product_image_08.webp?v=1746248247&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 4,
    reviews: 6,
    discount: "-19%",
  },
  {
    title: "Selenite Om Symbol Square Charging Bowl",
    image: "https://www.pandit.com/cdn/shop/files/selenite_om_symbol_square_charging_bowl_main_product_image_09.webp?v=1745646243&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 5,
    reviews: 9,
    discount: "-19%",
  },
  {
    title: "Money Attraction Combo",
    image: "https://www.pandit.com/cdn/shop/files/attract_money_combo_main_product_image_06.webp?v=1747657663&width=713",
    price: "₹996.00",
    oldPrice: "₹1,230.00",
    rating: 4,
    reviews: 5,
    discount: "-19%",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
         Latest Finds
          </h2>
        </div>

        {/* ================= MOBILE GRID (2 x 2) ================= */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {services.map((item, index) => (
            <div key={index} className="group">
              <div className="relative rounded-xl overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  {item.discount}
                </span>
              </div>

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

        {/* ================= DESKTOP GRID (5 x 2 = 10) ================= */}
        <div className="hidden md:grid grid-cols-5 gap-6">
          {services.map((item, index) => (
            <div key={index} className="group">
              <div className="relative rounded-xl overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {item.discount}
                </span>

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
          ))}
        </div>

      </div>
    </section>
  );
}

import Link from "next/link";

const collections = [
  { name: "Rudraksha", img: "https://www.pandit.com/cdn/shop/files/rudraksha_small_ea5cedba-5de0-46f7-a9cc-a90d1c5d470a.webp?v=1733215595&width=160", href: "/collections/rudraksha" },
  { name: "Tantra", img: "https://www.pandit.com/cdn/shop/files/tantra_small_606438c4-c588-46be-a7d3-b708d46b4bfa.webp?v=1733215620&width=160", href: "/collections/tantra" },
  { name: "Zodiac", img: "https://www.pandit.com/cdn/shop/files/zodiac_small_a9fd5557-f743-4afd-aa3c-a5f0778551d2.webp?v=1733215637&width=160", href: "/collections/zodiac" },
  { name: "Study", img: "https://www.pandit.com/cdn/shop/files/study_small_7dc5a3c7-e343-4c1b-80cb-563aa2892e1a.webp?v=1733215637&width=160", href: "/collections/study" },
  { name: "Wealth", img: "https://www.pandit.com/cdn/shop/files/wealth_small_fb03981c-34ec-41ee-8c8e-82fc8801409a.webp?v=1733215637&width=160", href: "/collections/wealth" },
  { name: "Money", img: "https://www.pandit.com/cdn/shop/files/money_small_dc312537-8a9d-423c-bfdc-5aa20cc487ba.webp?v=1733215637&width=160", href: "/collections/money" },
  { name: "Business", img: "https://www.pandit.com/cdn/shop/files/business_small_9d7dab84-b0b8-4911-a983-b3596c547279.webp?v=1733215637&width=160", href: "/collections/business" },
  { name: "Relationship", img: "https://www.pandit.com/cdn/shop/files/relationship_small_4823ec89-5c07-438e-9f6b-c74a973b5991.webp?v=1733215637&width=160", href: "/collections/relationship" },
];

export default function ShopByCollection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* CENTERED ICON LIST */}
        <div className="flex gap-4 md:gap-6 justify-center overflow-x-auto scrollbar-hide">
          {collections.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex-shrink-0 text-center group"
            >
              {/* ICON */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* BOLDER TEXT */}
              <p className="mt-3 text-sm md:text-base font-semibold text-gray-800 whitespace-nowrap">
                {item.name}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Free Shipping",
      desc: "",
      img: "https://www.pandit.com/cdn/shop/files/FREE_SHIPPING.png?v=1715063761&width=80",
    },
    {
      title: "COD Available",
      desc: "Cash on Delivery",
      img: "https://www.pandit.com/cdn/shop/files/COD.png?v=1715063761&width=80",
    },
    {
      title: "Prepaid",
      desc: "2 Free Rudraksha - worth ₹492/-",
      img: "https://www.pandit.com/cdn/shop/files/PREPAID.png?v=1715063761&width=80",
    },
    {
      title: "Fast Delivery",
      desc: "Within 4–6 working days",
      img: "https://www.pandit.com/cdn/shop/files/FAST_DELIVERY.png?v=1715063761&width=80",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 md:p-8 text-center bg-white hover:shadow-md transition"
            >
              {/* IMAGE ICON */}
              <div className="flex justify-center mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* SUBTEXT */}
              {item.desc && (
                <p className="mt-2 text-sm md:text-base text-gray-600">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

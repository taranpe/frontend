"use client";

import { Truck, CreditCard, Wallet, Zap } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Free Shipping",
      desc: "",
      icon: Truck,
    },
    {
      title: "COD Available",
      desc: "Cash on Delivery",
      icon: Wallet,
    },
    {
      title: "Prepaid",
      desc: "2 Free Rudraksha - worth 492/-",
      icon: CreditCard,
    },
    {
      title: "Fast Delivery",
      desc: "Within 4-6 working days",
      icon: Zap,
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 text-center bg-white"
              >
                {/* ICON */}
                <div className="flex justify-center mb-4 text-gray-800">
                  <Icon size={36} strokeWidth={1.5} />
                </div>

                {/* TITLE */}
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* SUBTEXT */}
                {item.desc && (
                  <p className="mt-2 text-sm text-gray-600">
                    {item.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

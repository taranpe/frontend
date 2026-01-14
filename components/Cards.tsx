"use client";

import { useRef, useEffect } from "react";

// Replace these image paths with your actual images
const images = [
  "https://astropatri.com/wp-content/themes/AstroP/images/2026-horoscope.jpg",
  "https://astropatri.com/wp-content/themes/AstroP/images/mangalik-dosha-img.jpg",
  "https://astropatri.com/wp-content/themes/AstroP/images/Kundli-horoscope-matching-img.jpg",
  "https://astropatri.com/wp-content/themes/AstroP/images/consult-vedic-astrologers.png",
  "https://astropatri.com/wp-content/themes/AstroP/images/2026-horoscope.jpg",
];

export default function ImageMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let scrollAmount = 0;
    let animationFrame: number;

    const scroll = () => {
      scrollAmount += 2; // scroll speed
      if (scrollAmount >= marquee.scrollWidth / 2) scrollAmount = 0;
      marquee.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    const stopScroll = () => cancelAnimationFrame(animationFrame);

    marquee.addEventListener("mouseenter", stopScroll);
    marquee.addEventListener("mouseleave", () => {
      animationFrame = requestAnimationFrame(scroll);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      marquee.removeEventListener("mouseenter", stopScroll);
      marquee.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <section className="py-12 bg-white w-full">
      <div className="overflow-hidden relative w-full">
        <div
          ref={marqueeRef}
          className="flex space-x-6 overflow-x-auto scrollbar-none w-full"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* duplicate images for infinite scroll */}
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3"
              style={{
                minWidth:
                  "100%", // mobile 1 card
              }}
            >
              <div className="border border-gray-300 rounded-xl overflow-hidden bg-white">
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-60 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar but keep functionality */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}

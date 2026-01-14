"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer text-4xl text-white"
      onClick={onClick}
    >
      ❯
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer text-4xl text-white"
      onClick={onClick}
    >
      ❮
    </div>
  );
}

export default function HeroBuyOne() {
  const slides = [
    { src: "/banner1.jpg", alt: "Banner 1" },
    { src: "/banner2.jpg", alt: "Banner 2" },
    { src: "/banner3.jpg", alt: "Banner 3" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Desktop Slider */}
      <div className="hidden md:block">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={slide.src}
                alt={slide.alt}
                className="object-contain w-auto h-auto max-w-full max-h-[90vh]"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile Single Image */}
      <div className="block md:hidden">
        <img
          src="/mb.jpg"
          alt="Banner 1"
          className="w-full h-auto object-cover max-h-[70vh]"
        />
      </div>
    </div>
  );
}

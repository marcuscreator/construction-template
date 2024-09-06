"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroCarousel() {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position to achieve parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1495036019936-220b29b930ea?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Unamwagikiwa na simiti foreman ankuambia uache kuleta urembo kwa kazi.",
      buttonText: "About Us",
      buttonLink: "/company",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1671808062726-2a7ffcd6109e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Unakanyaga msumari foreman anakuuliza mbona unafanya kazi ya nyundo.",
      buttonText: "Projects",
      buttonLink: "/projects",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Unaangukia mwenzako na simiti foreman anakuambia pillow fight achia wadosi.",
      buttonText: "Services",
      buttonLink: "/services",
    },
    {
      image:
        "https://images.unsplash.com/photo-1489514354504-1653aa90e34e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Unanosebleed ukiwa mjengo foreman ankuuliza nani amekupea kazi ya kupaka rangi.",
      buttonText: "Reach Out",
      buttonLink: "/contact",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div
              className="h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`, // Parallax effect
              }}
            >
              <img
                src={slide.image}
                alt=""
                className="object-cover w-full h-full"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-80"></div>
              {/* Text centered in the middle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-2xl md:text-4xl font-bold">
                    "{slide.text}"
                  </h2>
                  <a
                    href={slide.buttonLink}
                    className="mt-4 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroCarousel;

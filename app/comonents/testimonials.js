"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "MINTER PUCHAN",
      title: "Director, AKT",
      image: "https://thumbs.dreamstime.com/b/studio-photo-african-american-female-model-face-profile-closeup-fashionable-portrait-metis-young-woman-perfect-smooth-153607290.jpg", // Replace with actual image path
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "JOHN DOE",
      title: "CEO, Company XYZ",
      image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg", // Replace with actual image path
    },
    // Add more testimonials as needed
  ];

  const smallCards = [
    "https://seeklogo.com/images/E/education-college-school-logo-289049824A-seeklogo.com.png", // Replace with actual image paths
    "https://i.pinimg.com/474x/f6/81/c7/f681c776279f3f2a0d775eba95efc9c9.jpg",
    "https://i.pinimg.com/474x/3c/e1/96/3ce196b55fd63cba9f7387a298cdc96e.jpg",
    "https://i.pinimg.com/736x/f5/43/e0/f543e07320b4864744d4d2a066678d51.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide) => setCurrentSlide(currentSlide),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full ${
          currentSlide === i ? "bg-blue-500" : "bg-gray-300"
        }`}
      />
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="testimonials-section py-12 px-4 bg-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Testimonials Section */}
        <div className="testimonials flex-1">
          <h2 className="text-center text-3xl text-black font-bold mb-4">
            TESTIMONIALS
          </h2>
          <div className="max-w-lg mx-auto">
            {" "}
            {/* Center the slider and limit its width */}
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card p-6 rounded-lg bg-white shadow-lg flex flex-col items-center text-center w-80" // Fixed width for cards
                >
                  <p className="text-lg text-black italic mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <div>
                      <h4 className="text-xl text-orange-500 font-semibold">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-700">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Side Section with Small Responsive Cards */}
        <div className="side-section flex-1">
          <h4 className="text-center text-2xl text-black font-semibold mb-8">
            HAPPY CLIENTS
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {smallCards.map((image, index) => (
              <div
                key={index}
                className="small-card overflow-hidden w-4/5 h-32  shadow-md"
              >
                <img
                  src={image}
                  alt={`Small card ${index}`}
                  className="w-full h-32 object-fit" // Fixed height for small cards
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

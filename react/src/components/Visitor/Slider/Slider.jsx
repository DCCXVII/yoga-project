import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      image:
        "https://dplvxv40qur9n.cloudfront.net/0fa76adf-b3de-4d62-9aca-ad8fee622042.jpg",

      title: "Mindful May Giveaway",
      description:
        "Take as many mindfulness classes as you can for the chance to win the ultimate wellness package.",
      buttonText: "LEARN MORE",
    },
    {
      image:
        "https://dplvxv40qur9n.cloudfront.net/a04852c9-ba7a-4b55-8a0d-462c54c43aa1.jpg",
      title: "The DanceBody Program",
      description:
        "New trainer Katia Pryce has some moves! Sweat to the beat and find your rhythm with this new series.",
      buttonText: "JOIN THE CLUB",
    },
    // Add more slide objects as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      <div id="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="slide">
              <div className="slide-overlay"></div>
              <img
                className="images"
                src={slide.image}
                alt={`Slide ${slideIndex + 1}`}
              />
              <div className="slide-content">
                <h3 className="slide-title">{slide.title}</h3>
                <p className="slide-description">{slide.description}</p>
                <button className="slide-button">{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
        <div id="dot">
          {slides.map((_, dotIndex) => (
            <span
              key={dotIndex}
              className={`dot ${dotIndex === index ? "active" : ""}`}
              onClick={() => setIndex(dotIndex)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

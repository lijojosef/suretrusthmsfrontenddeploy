import React, { useState, useEffect } from "react";
import "./slidingbanners.css";
import banner0 from "../../assets/banner0.jpg";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const banners = [banner0, banner1, banner2, banner3];

function SlidingBanners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightArrowClick();
    }, 2500); // Change the interval time here (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div className="banner-arrow banner-left" onClick={handleLeftArrowClick}>
        {"<"}
      </div>
      <div className="banner-image-container">
        {banners.map((banner, index) => (
          <img
            key={index}
            className={`banner-image ${
              index === currentIndex ? "visible" : ""
            }`}
            src={banner}
            alt={`Banner ${index}`}
          />
        ))}
      </div>
      <div
        className="banner-arrow banner-right"
        onClick={handleRightArrowClick}
      >
        {">"}
      </div>
    </div>
  );
}

export default SlidingBanners;

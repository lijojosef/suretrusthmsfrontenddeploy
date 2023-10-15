import React, { useState, useEffect } from "react";
import "./ourjourney.css";
import oj1 from "./images/oj1.jpg";
import oj2 from "./images/oj2.jpg";
import oj3 from "./images/oj3.jpg";
import oj4 from "./images/oj4.jpg";

const OurJourney = () => {
  const journeyInfo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tellus a lorem vestibulum, eget tempus libero laoreet. Integer id ante sed justo suscipit aliquam.`;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [oj1, oj2, oj3, oj4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="our-journey-container">
      <div className="journey-info">
        <h2>Our Journey</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          tellus a lorem vestibulum, eget tempus libero laoreet. Integer id ante
          sed justo suscipit aliquam.
        </p>
      </div>

      <div className="journey-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Our Journey ${index + 1}`}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default OurJourney;

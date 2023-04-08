import React, { useEffect, useState } from "react";
import "./Image_slider.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import G2 from "../../Utils/Images/G2.jpg";
import G4 from "../../Utils/Images/G4.webp";
import G5 from "../../Utils/Images/G5.webp";

const Image_slider = () => {
  const images = [G2, G4, G5];
  const [index, setIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  //     }, 2000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div >
      <div class="image-text">
      <div className="black">
        <h2>ROSEATE</h2>
        <h4>HOTELS AND RESORTS</h4>
        </div>
      </div>
      
    </div>
  );
};

export default Image_slider;

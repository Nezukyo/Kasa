import React from "react";
import { useState } from "react";
import "../Slideshow/style.css";

import arrowLeft from "../../Assets/arrow-left.png";
import arrowRight from "../../Assets/arrow-right.png";

//function that awaits an array of images which is given as a prop by the name slide
const Slideshow = ({ slide }) => {
  const [mainPic, setMainPic] = useState(0);
  const length = slide.length;

  const nextPic = () => {
    //Goes back to the first pic if we click on the arrow next on the last slide
    setMainPic(mainPic + 1);
    if (mainPic === length - 1) setMainPic(0);
  };

  const prevPic = () => {
    //Goes to the last slide if we click on the arrow previous while on the first slide
    setMainPic(mainPic - 1);
    if (mainPic === 0) setMainPic(length - 1);
  };

  return (
    <>
      <div
        className="Slider"
        style={{ backgroundImage: `url(${slide[mainPic]})` }}
      >
        {length > 1 && (
          <>
            <div className="slide-img-style">
              <img
                src={arrowLeft}
                alt="previous"
                onClick={prevPic}
                className="arrow-left arrow"
              />
              <img
                src={arrowRight}
                alt="next"
                onClick={nextPic}
                className="arrow-right arrow"
              />
            </div>
            <p className="count">
              {mainPic + 1}/ {length}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Slideshow;

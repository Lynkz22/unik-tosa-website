import React from "react";
import "../Styles/IntroductionPics.css";
import introductionPicsOne from "../Components/Assets/MC2.jpg";
import introductionPicsTwo from "../Components/Assets/BOU 4.jpg";
import introductionPicsThree from "../Components/Assets/MC5.jpg";

const IntroductionPics = () => {
  return (
    <>
      <div className="divIntroPics">
        <div className="divIntroPics-1">
          <img
            className="introductionPics"
            alt="introductionImg"
            src={introductionPicsOne}
          />
        </div>
        <div className="divIntroPics-1">
          <img
            className="introductionPics"
            alt="introductionImg"
            src={introductionPicsTwo}
          />
        </div>
        <div className="divIntroPics-1">
          <img
            className="introductionPics"
            alt="introductionImg"
            src={introductionPicsThree}
          />
        </div>
      </div>
    </>
  );
};

export default IntroductionPics;

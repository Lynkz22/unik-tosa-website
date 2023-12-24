import React from "react";
import "../Styles/IntroductionPics.css";
import introductionPicsOne from "../Components/Assets/Maryam-Court/MC2.jpg";
import introductionPicsTwo from "../Components/Assets/Bourdillon/BOU1.jpg";
import introductionPicsThree from "../Components/Assets/Maryam-Court/MC1.jpg";

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

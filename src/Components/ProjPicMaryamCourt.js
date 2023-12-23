import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MaryamCourtImage1 from "../Components/Assets/Maryam's-Court/MC1.webp";
import MaryamCourtImage2 from "../Components/Assets/Maryam's-Court/MC2.webp";
import MaryamCourtImage3 from "../Components/Assets/Maryam's-Court/MC3.webp";
import MaryamCourtImage4 from "../Components/Assets/Maryam's-Court/MC4.webp";

export class ProjPicMaryamCourt extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      disabled: true,
    };

    return (
      <>
        <section className="projectsPictures">
          <div className="divProjectsPicturesInfo">
            <h2>Maryam Court, V.I</h2>
            <span>WORK DESCRIPTION:</span> Structural Consultancy
            <br />
            <span>PROJECT DESCRIPTION:</span> A proposed 12-floor exclusive
            residential development consisting of 18 apartments on 550 Sqm. on
            600mm diameter 18m depth pile
            <br />
            <span>PROJECT LOCATION:</span> Victoria Island, Lagos
            <br />
            <span>STAGE:</span> Construction Ongoing
            <br />
            <span>MODE OF CONSTRUCTION:</span> Reinforced concrete Cast In-Situ
            <br />
            <span>PROJECT YEAR:</span> 2021 - Present
            <br />
            <span>PROJECT COST:</span> ₦3.5B
          </div>
          <section className="sectionIndividualProjects">
            <Slider
              ref={(c) => (this.slider = c)}
              {...settings}
              className="sliderProjectImages"
            >
              <div className="projectImages" key={1}>
                <img
                  className="projectImages-1"
                  alt="Maryam Court Images"
                  src={MaryamCourtImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Maryam Court Images"
                  src={MaryamCourtImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Maryam Court Images"
                  src={MaryamCourtImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Maryam Court Images"
                  src={MaryamCourtImage4}
                />
              </div>
            </Slider>
            <div className="divProjectsButtons">
              <button className="projectsButtonLeft" onClick={this.previous}>
                <span class="material-symbols-outlined">arrow_circle_left</span>
              </button>
              <button className="projectsButtonRight" onClick={this.next}>
                <span class="material-symbols-outlined">
                  arrow_circle_right
                </span>
              </button>
            </div>
          </section>
        </section>
      </>
    );
  }
}

export default ProjPicMaryamCourt;

import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PeriwinkleImage from "../Components/Assets/Periwinkle/Prwk1.jpg";
import PeriwinkleImage1 from "../Components/Assets/Periwinkle/PRW1.jpg";
import PeriwinkleImage2 from "../Components/Assets/Periwinkle/PRW2.jpg";
import PeriwinkleImage3 from "../Components/Assets/Periwinkle/PRW3.webp";
import PeriwinkleImage4 from "../Components/Assets/Periwinkle/PRW4.webp";
import PeriwinkleImage5 from "../Components/Assets/Periwinkle/PRW5.webp";
import PeriwinkleImage6 from "../Components/Assets/Periwinkle/PRW6.webp";
import PeriwinkleImage7 from "../Components/Assets/Periwinkle/PRW7.webp";

export class ProjPicPeriwinkleEstate extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  } //
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
            <h2>Periwinkle, Ikate</h2>
            <span>WORK DESCRIPTION:</span> Structural Consultancy
            <br />
            <span>PROJECT DESCRIPTION:</span> An exclusive 6-floor residential
            development consisting of 12 apartments on 1,118 Sqm. on pile
            foundation
            <br />
            <span>PROJECT LOCATION:</span> Periwinkle Estate, Ikate, Lagos
            <br />
            <span>STAGE:</span> Construction Ongoing
            <br />
            <span>MODE OF CONSTRUCTION:</span> Reinforced concrete Cast In-Situ
            with ribbed floor
            <br />
            <span>PROJECT YEAR:</span> 2022 - Present
            <br />
            <span>PROJECT COST:</span> ₦1.5B
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
                  alt="Periwinkle Images"
                  src={PeriwinkleImage}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Periwinkle Images"
                  src={PeriwinkleImage1}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Periwinkle Images"
                  src={PeriwinkleImage2}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Periwinkle Images"
                  src={PeriwinkleImage3}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Periwinkle Images"
                  src={PeriwinkleImage4}
                />
              </div>
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="Periwinkle Images"
                  src={PeriwinkleImage5}
                />
              </div>
              <div className="projectImages" key={7}>
                <img
                  className="projectImages-1"
                  alt="Periwinkle Images"
                  src={PeriwinkleImage6}
                />
              </div>
              <div className="projectImages" key={8}>
                <img
                  className="projectImages-1"
                  alt="Periwinkle Images"
                  src={PeriwinkleImage7}
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

export default ProjPicPeriwinkleEstate;

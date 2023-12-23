import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BourdillonImage1 from "../Components/Assets/Bourdillon/BOU1.webp";
import BourdillonImage2 from "../Components/Assets/Bourdillon/BOU2.webp";
import BourdillonImage3 from "../Components/Assets/Bourdillon/BOU3.webp";
import BourdillonImage4 from "../Components/Assets/Bourdillon/BOU4.webp";

export class ProjPicBourdillon extends Component {
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
            <h2>Bourdillon, Ikoyi</h2>
            <span>WORK DESCRIPTION:</span> Structural Consultancy
            <br />
            <span>PROJECT DESCRIPTION:</span> A proposed 26-floor luxury
            residential development consisting of parking spaces on ground, 1st,
            & 2nd floor, office spaces, and residential apartments sitting on an
            800mm diameter 50m depth pile on 670 Sqm.
            <br />
            <span>PROJECT LOCATION:</span> Ikoyi, Lagos
            <br />
            <span>STAGE:</span> Pre-Construction stage
            <br />
            <span>MODE OF CONSTRUCTION:</span> Reinforced Concrete Cast In-Situ
            <br />
            <span>PROJECT YEAR:</span> 2021 - Present
            <br />
            <span>PROJECT COST:</span> $1.5B
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
                  alt="Bourdillon Images"
                  src={BourdillonImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Bourdillon Images"
                  src={BourdillonImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Bourdillon Images"
                  src={BourdillonImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Bourdillon Images"
                  src={BourdillonImage4}
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

export default ProjPicBourdillon;

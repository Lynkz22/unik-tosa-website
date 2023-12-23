import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GilImage1 from "../Components/Assets/Gil-Automations/GIL1.jpg";
import GilImage2 from "../Components/Assets/Gil-Automations/GIL2.jpg";
import GilImage3 from "../Components/Assets/Gil-Automations/GIL3.jpg";
import GilImage4 from "../Components/Assets/Gil-Automations/GIL4.jpg";
import GilImage5 from "../Components/Assets/Gil-Automations/GIL5.jpg";
import GilImage6 from "../Components/Assets/Gil-Automations/GIL6.jpg";
import GilImage7 from "../Components/Assets/Gil-Automations/GIL7.jpg";
import GilImage8 from "../Components/Assets/Gil-Automations/GIL8.jpg";

export class ProjPicGilAutomations extends Component {
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
            <h2>GIL AUTOMATIONS</h2>
            <span>WORK DESCRIPTION:</span> Structural Consultancy
            <br />
            <span>PROJECT DESCRIPTION:</span> A smart commercial development on
            700 Sqm on pad foundation
            <br />
            <span>PROJECT LOCATION:</span> Alausa, Lagos
            <br />
            <span>STAGE:</span> Completed and In-use
            <br />
            <span>MODE OF CONSTRUCTION:</span> Reinforced Concrete Cast In-Situ
            <br />
            <span>PROJECT YEAR:</span> 2017 - 2019
            <br />
            <span>PROJECT COST:</span> ₦800M
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
                  alt="Gil Automations Images"
                  src={GilImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Gil Automations Images"
                  src={GilImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Gil Automations Images"
                  src={GilImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Gil Automations Images"
                  src={GilImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Gil Automations Images"
                  src={GilImage5}
                />
              </div>
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="Gil Automations Images"
                  src={GilImage6}
                />
              </div>
              <div className="projectImages" key={7}>
                <img
                  className="projectImages-1"
                  alt="Gil Automations Images"
                  src={GilImage7}
                />
              </div>
              <div className="projectImages" key={8}>
                <img
                  className="projectImages-1"
                  alt="Gil Automations Images"
                  src={GilImage8}
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

export default ProjPicGilAutomations;

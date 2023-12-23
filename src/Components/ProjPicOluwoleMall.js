import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OluwoleMallImage1 from "../Components/Assets/Oluwole-Mall/OLM1.webp";
import OluwoleMallImage2 from "../Components/Assets/Oluwole-Mall/OLM2.webp";
import OluwoleMallImage3 from "../Components/Assets/Oluwole-Mall/OLM3.webp";
import OluwoleMallImage4 from "../Components/Assets/Oluwole-Mall/OLM4.webp";
import OluwoleMallImage5 from "../Components/Assets/Oluwole-Mall/OLM5.webp";
import OluwoleMallImage6 from "../Components/Assets/Oluwole-Mall/OLM6.webp";

export class OluwoleMall extends Component {
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
            <h2>Oluwole Mall, C.M.S</h2>
            <span>WORK DESCRIPTION:</span> Structural Consultancy
            <br />
            <span>PROJECT DESCRIPTION:</span> ?
            <br />
            <span>PROJECT LOCATION:</span> C.M.S, Lagos
            <br />
            <span>STAGE:</span> Construction Ongoing
            <br />
            <span>MODE OF CONSTRUCTION:</span> Reinforced Concrete Cast In-Situ
            <br />
            <span>PROJECT YEAR:</span> 2023 - Present
            <br />
            <span>PROJECT COST:</span> ?
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
                  alt="Oluwole Mall Images"
                  src={OluwoleMallImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Oluwole Mall Images"
                  src={OluwoleMallImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Oluwole Mall Images"
                  src={OluwoleMallImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Oluwole Mall Images"
                  src={OluwoleMallImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Oluwole Mall Images"
                  src={OluwoleMallImage5}
                />
              </div>
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="Oluwole Mall Images"
                  src={OluwoleMallImage6}
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

export default OluwoleMall;

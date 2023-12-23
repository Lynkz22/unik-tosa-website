import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JustriteAkobo1 from "../Components/Assets/JustriteAkobo/AK1.webp";
import JustriteAkobo2 from "../Components/Assets/JustriteAkobo/AK2.webp";
import JustriteAkobo3 from "../Components/Assets/JustriteAkobo/AK3.webp";
import JustriteAkobo4 from "../Components/Assets/JustriteAkobo/AK4.webp";
import JustriteAkobo5 from "../Components/Assets/JustriteAkobo/AK5.webp";

export class ProjPicJustriteAkobo extends Component {
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
            <h2>Justrite, Akobo</h2>
            <span>WORK DESCRIPTION:</span> Structural Consultancy
            <br />
            <span>PROJECT DESCRIPTION:</span> Proposed re-modelling of an
            existing hall to shopping mall for Justrite Ltd. on 1123 Sqm.
            <br />
            <span>PROJECT LOCATION:</span> Akobo-Olorunda-Abaa Road, Ibadan
            <br />
            <span>STAGE:</span> Construction Ongoing
            <br />
            <span>MODE OF CONSTRUCTION:</span> Reinforced Concrete Cast In-Situ
            <br />
            <span>PROJECT YEAR:</span> 2023 - Present
            <br />
            <span>PROJECT COST:</span> ₦700M
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
                  alt="Justrite Akobo Images"
                  src={JustriteAkobo1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Justrite Akobo Images"
                  src={JustriteAkobo2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Justrite Akobo Images"
                  src={JustriteAkobo3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Justrite Akobo Images"
                  src={JustriteAkobo4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Justrite Akobo Images"
                  src={JustriteAkobo5}
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

export default ProjPicJustriteAkobo;

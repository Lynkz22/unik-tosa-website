import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JustriteEleyele1 from "../Components/Assets/JustriteEleyele/ELE1.webp";
import JustriteEleyele2 from "../Components/Assets/JustriteEleyele/ELE2.webp";
import JustriteEleyele3 from "../Components/Assets/JustriteEleyele/ELE3.webp";
import JustriteEleyele4 from "../Components/Assets/JustriteEleyele/ELE4.webp";
import JustriteEleyele5 from "../Components/Assets/JustriteEleyele/ELE5.webp";
import JustriteEleyele6 from "../Components/Assets/JustriteEleyele/ELE6.webp";
import JustriteEleyele7 from "../Components/Assets/JustriteEleyele/ELE7.webp";

export class ProjPicJustriteEleyele extends Component {
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
            <h2>Justrite, Eleyele</h2>
            <span>WORK DESCRIPTION:</span> Structural Consultancy
            <br />
            <span>PROJECT DESCRIPTION:</span> A proposed shopping mall with a
            40m span roof for Justrite Ltd. on over 2,500 Sqm. on pad foundation
            <br />
            <span>PROJECT LOCATION:</span> Sango, Eleyele road, Ibadan
            <br />
            <span>STAGE:</span> Construction Ongoing
            <br />
            <span>MODE OF CONSTRUCTION:</span> Reinforced Concrete Cast In-Situ
            <br />
            <span>PROJECT YEAR:</span> 2023 - Present
            <br />
            <span>PROJECT COST:</span> ₦1.2B
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
                  alt="Justrite Eleyele Images"
                  src={JustriteEleyele1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Justrite Eleyele Images"
                  src={JustriteEleyele2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Justrite Eleyele Images"
                  src={JustriteEleyele3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Justrite Eleyele Images"
                  src={JustriteEleyele4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Justrite Eleyele Images"
                  src={JustriteEleyele5}
                />
              </div>
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="Justrite Eleyele Images"
                  src={JustriteEleyele6}
                />
              </div>
              <div className="projectImages" key={7}>
                <img
                  className="projectImages-1"
                  alt="Justrite Eleyele Images"
                  src={JustriteEleyele7}
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

export default ProjPicJustriteEleyele;

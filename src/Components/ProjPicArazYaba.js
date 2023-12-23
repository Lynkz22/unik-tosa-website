import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArazImage1 from "../Components/Assets/Araz/ARAZ1.jpg";
import ArazImage2 from "../Components/Assets/Araz/ARAZ2.jpg";
import ArazImage3 from "../Components/Assets/Araz/ARAZ3.webp";
import ArazImage4 from "../Components/Assets/Araz/ARAZ4.webp";
import ArazImage5 from "../Components/Assets/Araz/ARAZ5.jpg";
import ArazImage6 from "../Components/Assets/Araz/ARAZ6.jpg";
import ArazImage7 from "../Components/Assets/Araz/ARAZ7.jpg";

export class ProjPicArazYaba extends Component {
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
        <section className="sectionProjectsPage">
          <section className="projectsPictures">
            <div className="divProjectsPicturesInfo">
              <h2>Araz, Yaba</h2>
              <span>WORK DESCRIPTION:</span> Structural Consultancy
              <br />
              <span>PROJECT DESCRIPTION:</span> A luxury mini estate consisting
              of 10 apartments on pad foundation
              <br />
              <span>PROJECT LOCATION:</span> Qtrs. 59 & 60, G.R.A, YCT Staff
              Quarters, Mainland L.G.A., Lagos
              <br />
              <span>STAGE:</span> Completed
              <br />
              <span>MODE OF CONSTRUCTION:</span> Reinforced Concrete Cast
              In-Situ
              <br />
              <span>PROJECT YEAR:</span> 2021 - 2023
              <br />
              <span>PROJECT COST:</span> ₦1.3B
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
                    alt="Araz Yaba Images"
                    src={ArazImage1}
                  />
                </div>
                <div className="projectImages" key={2}>
                  <img
                    className="projectImages-1"
                    alt="Araz Yaba Images"
                    src={ArazImage2}
                  />
                </div>
                <div className="projectImages" key={3}>
                  <img
                    className="projectImages-1"
                    alt="Araz Yaba Images"
                    src={ArazImage3}
                  />
                </div>
                <div className="projectImages" key={4}>
                  <img
                    className="projectImages-1"
                    alt="Araz Yaba Images"
                    src={ArazImage4}
                  />
                </div>
                <div className="projectImages" key={5}>
                  <img
                    className="projectImages-1"
                    alt="Araz Yaba Images"
                    src={ArazImage5}
                  />
                </div>
                <div className="projectImages" key={6}>
                  <img
                    className="projectImages-1"
                    alt="Araz Yaba Images"
                    src={ArazImage6}
                  />
                </div>
                <div className="projectImages" key={7}>
                  <img
                    className="projectImages-1"
                    alt="Araz Yaba Images"
                    src={ArazImage7}
                  />
                </div>
              </Slider>
              <div className="divProjectsButtons">
                <button className="projectsButtonLeft" onClick={this.previous}>
                  <span class="material-symbols-outlined">
                    arrow_circle_left
                  </span>
                </button>
                <button className="projectsButtonRight" onClick={this.next}>
                  <span class="material-symbols-outlined">
                    arrow_circle_right
                  </span>
                </button>
              </div>
            </section>
          </section>
        </section>
      </>
    );
  }
}

export default ProjPicArazYaba;

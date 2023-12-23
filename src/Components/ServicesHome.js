import React, { Component } from "react";
import "../Styles/ServicesHome.css";
import servicesImage1 from "../Components/Assets/Beach-House/BH1.jpg";
import servicesImage2 from "../Components/Assets/TCN-Maryland/TCN1.jpg";
import servicesImage3 from "../Components/Assets/MC2.jpg";
import servicesImage4 from "../Components/Assets/BOU 4.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// import { motion } from "framer-motion";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={{className}}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

class ServicesHome extends Component {
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
      slidesToShow: 1,
      slidesToScroll: 1,
      disabled: true,
    };

    // const { ref, inView } = ({ threshold: 0 });

    return (
      <>
        <motion.section
          // ref={ref}
          className="sectionServicesHome"
          initial={{ opacity: 0, y: "+30vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          // animate={{ y: inView ? 0 : 0 }}
          // transition={{ duration: 3, delay: 1 }}
        >
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div className="divServicesHome" key={1}>
              <div className="divServicesHomeSlide">
                <div className="imageServicesHome">
                  <img
                    className="servicesImage1"
                    alt="servicesImg"
                    src={servicesImage1}
                  />
                </div>
                <div className="divServicesHome-1">
                  <h1 className="headingServicesHome">OUR SERVICES</h1>
                  <p className="paraServicesHome">
                    <h4 className="headingServicesHome-1">
                      CONSTRUCTION AND SUPERVISION
                    </h4>
                    <br />
                    UNIK-TOSA offer construction management services, which
                    involve overseeing the entire construction process, from
                    planning to execution, to ensure that the project is
                    completed on time, within budget, and to the required
                    quality standards.
                    <br /> <br />
                    We provide supervision services which involves monitoring
                    the construction process to ensure that it is being carried
                    out according to the design specifications and quality
                    standards.
                  </p>
                  <Link to="/About">
                    <button className="buttonServicesHome">
                      <p>Our Services</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="divServicesHome" key={2}>
              <div className="divServicesHomeSlide">
                <div className="imageServicesHome">
                  <img
                    className="servicesImage1"
                    alt="servicesImg"
                    src={servicesImage2}
                  />
                </div>
                <div className="divServicesHome-1">
                  <h1 className="headingServicesHome">OUR SERVICES</h1>
                  <p className="paraServicesHome">
                    <h4 className="headingServicesHome-1">
                      PROJECT MANAGEMENT
                    </h4>
                    <br />
                    UNIK-TOSA provides project management services that involve
                    coordinating the efforts of all parties involved in the
                    construction process, including architects, engineers,
                    contractors, and subcontractors.
                    <br /> <br />
                    We ensure that all safety regulations are followed and that
                    the project is completed in a safe and secure manner.
                    <br /> <br />
                    Our project management services include planning,
                    scheduling, and budgeting and providing risk management
                    services.
                  </p>
                  <Link to="/About">
                    <button className="buttonServicesHome">
                      <p>Our Services</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="divServicesHome" key={3}>
              <div className="divServicesHomeSlide">
                <div className="imageServicesHome">
                  <img
                    className="servicesImage1"
                    alt="servicesImg"
                    src={servicesImage3}
                  />
                </div>
                <div className="divServicesHome-1">
                  <h1 className="headingServicesHome">OUR SERVICES</h1>
                  <p className="paraServicesHome">
                    <h4 className="headingServicesHome-1">
                      STRUCTURAL CONSULTANCY
                    </h4>
                    <br />
                    UNIK-TOSA provides expert advice and guidance to clients on
                    various aspects of the construction process, including
                    structural design, analysis, and testing.
                    <br /> <br />
                    We provide structural engineering services that involve
                    designing and analyzing the structural components of a
                    building or other infrastructure.
                    <br /> <br />
                    We also ensure that the structural components of a building
                    or other infrastructure are designed and analyzed to meet
                    the required quality standards.
                  </p>
                  <Link to="/About">
                    <button className="buttonServicesHome">
                      <p>Our Services</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="divServicesHome" key={4}>
              <div className="divServicesHomeSlide">
                <div className="imageServicesHome">
                  <img
                    className="servicesImage1"
                    alt="servicesImg"
                    src={servicesImage4}
                  />
                </div>
                <div className="divServicesHome-1">
                  <h1 className="headingServicesHome">OUR SERVICES</h1>
                  <p className="paraServicesHome">
                    <h4 className="headingServicesHome-1">DETAILED DESIGN</h4>
                    <br />
                    UNIK-TOSA provides detailed design services that involve
                    refining and developing the approved conceptual design. We
                    provide complete and precise physical description of all
                    parts of the structure and how they are fit together
                    <br /> <br />
                    The detailed design of a structure involves the providing
                    structural design, material selection and also ensuring that
                    the structure is designed and analyzed to meet the required
                    quality standards.
                  </p>
                  <Link to="/About">
                    <button className="buttonServicesHome">
                      <p>Our Services</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
          <div className="divServicesButtons">
            <button className="servicesButtonLeft" onClick={this.previous}>
              <span class="material-symbols-outlined">arrow_circle_left</span>
            </button>
            <button className="servicesButtonRight" onClick={this.next}>
              <span class="material-symbols-outlined">arrow_circle_right</span>
            </button>
          </div>
        </motion.section>
      </>
    );
  }
}

export default ServicesHome;

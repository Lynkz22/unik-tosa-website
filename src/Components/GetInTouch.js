import React from "react";
import { Link } from "react-router-dom";
import "../Styles/GetInTouch.css";
import ProjectHomeImageOne from "../Components/Assets/BOU 4.jpg";

const GetInTouch = () => {
  return (
    <>
      <section className="sectionGetInTouch">
        <div className="divGetInTouch">
          <div className="divGITHeading">
            <h1 className="divGITHeading-1">GET IN TOUCH</h1>
          </div>
          <div className="divGitContent">
            <p className="gitContent">
              UNIK-TOSA has a reputation of being a professional and reliable
              structural firm. We are comitted to delivering high-quality work
              that meets the highest standards of excellence using the latest
              technology and tools, and following the best practices and
              regulations of the industry.
              <br />
              <br />
              Being the engineers, we are also your partners. We value your
              input and feedback, and we work closely with you throughout the
              entire process. We listen to your ideas, understand your goals,
              and offer our expert advice and guidance.
              <br />
              <br />
              We are more than happy to enlighten you more on our company and
              answer any questions you may have.
            </p>
          </div>

          <div className="divGITContactButton">
            <Link to="/Contact">
              <button className="divGITContactButton-1">
                <p className="gitContactButton-1">Contact Us</p>
              </button>
            </Link>
          </div>
        </div>

        <div className="sectionContactImage">
          <img
            //   className="projectHomeImage"
            alt="HeroImg"
            src={ProjectHomeImageOne}
            className="image2"
          />
        </div>
      </section>
    </>
  );
};

export default GetInTouch;

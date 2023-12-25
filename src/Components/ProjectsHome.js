import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ProjectsHome.css";
import BeachHouse from "../Components/Assets/Beach-House/BH1.jpg";
import TCNMaryland from "../Components/Assets/TCN-Maryland/TCN1.jpg";
import Bourdillon from "../Components/Assets/Bourdillon/BOU1.jpg";
import MaryamsCourt from "../Components/Assets/Maryams-Court/MC1.jpg";
import Araz from "../Components/Assets/Araz/ARAZ1.jpg";
import Periwinkle from "../Components/Assets/Periwinkle/Prwk1.jpg";

const ProjectsHome = () => {
  return (
    <>
      <section className="sectionProjectsHome">
        <div className="divProjectsHome">
          <h1 className="headingProjectsHome">OUR PROJECTS</h1>
          <p className="textProjectsHome">
            UNIK-TOSA have designed, managed and consulted on a variety of
            construction projects, providing quality ensuring that the project
            is completed on time, within budget, and to the required quality
            standards.
            <br /> <br />
            UNIK-TOSA has a proven track record of delivering high-quality work,
            and we are committed to ensuring quality delivery on all projects we
            are tasked with. We have grown from a small construction firm to a
            competitive large corporate firm that undertakes big scale
            projects all encompassing buildings construction. 
          </p>
        </div>
        <div className="divProjectsHome-1">
          <div>
            <Link to="/Projects">
              <div className="projectsHomeContainer">
                <img
                  className="projectHomeImage"
                  alt="ProjectsImage"
                  src={MaryamsCourt}
                />
                <div className="projectsHomeText">
                  <p className="projectsHomeText-1">MARYAM'S COURT</p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/Projects">
              <div className="projectsHomeContainer">
                <img
                  className="projectHomeImage"
                  alt="ProjectsImage"
                  src={Periwinkle}
                />
                <div className="projectsHomeText">
                  <p className="projectsHomeText-1">PERIWINKLE</p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/Projects">
              <div className="projectsHomeContainer">
                <img
                  className="projectHomeImage"
                  alt="ProjectsImage"
                  src={Bourdillon}
                />
                <div className="projectsHomeText">
                  <p className="projectsHomeText-1">BOURDILLON</p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/Projects">
              <div className="projectsHomeContainer">
                <img
                  className="projectHomeImage"
                  alt="ProjectsImage"
                  src={BeachHouse}
                />
                <div className="projectsHomeText">
                  <p className="projectsHomeText-1">BEACH HOUSE</p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/Projects">
              <div className="projectsHomeContainer">
                <img
                  className="projectHomeImage"
                  alt="ProjectsImage"
                  src={TCNMaryland}
                />
                <div className="projectsHomeText">
                  <p className="projectsHomeText-1">TCN MARYLAND</p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/Projects">
              <div className="projectsHomeContainer">
                <img
                  className="projectHomeImage"
                  alt="ProjectsImage"
                  src={Araz}
                />
                <div className="projectsHomeText">
                  <p className="projectsHomeText-1">ARAZ</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsHome;

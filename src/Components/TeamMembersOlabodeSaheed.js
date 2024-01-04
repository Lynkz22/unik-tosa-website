import React from "react";
import "../Styles/TeamMembers.css";
import olabodesaheed from "../Components/Assets/Beach-House/BH1.jpg";

const TeamMembersOlabodeSaheed = () => {
  return (
    <>
      <div className="teamMembers">
        <div className="teamMembers-1">
          <div className="divTeamMembersImage">
            <img
              className="teamMembersImage"
              alt="Olabode Saheed"
              src={olabodesaheed}
            />
          </div>
          <div className="teamMembersName">
            <h1>Olabode Saheed</h1>
            <p> Senior Partner</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Olabode Saheed</b> holds a Bachelor of Science degree from the
            prestigious University of Lagos, Akoka. He's a member of the
            Nigerian Society of Engineers and Council for Regulation of
            Engineering in Nigeria (COREN). He commenced his engineering carer
            with UF-A Consulting as a graduate engineer and later rose to the
            position of a project engineer responsible for the design,
            detailing, and supervision of civil engineering projects. His wealth
            of experience covers several areas of civil engineering with a
            specialization in foundation and tall structures.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMembersOlabodeSaheed;

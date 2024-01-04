import React from "react";
import "../Styles/TeamMembers.css";
import georgeugwu from "../Components/Assets/Beach-House/BH1.jpg";

const TeamMemberGeorgeUgwu = () => {
  return (
    <>
      <div className="teamMembers">
        <div className="teamMembers-1">
          <div className="divTeamMembersImage">
            <img
              className="teamMembersImage"
              alt="George C. Ugwu"
              src={georgeugwu}
            />
          </div>
          <div className="teamMembersName">
            <h1>George C. Ugwu</h1>
            <p> Senior Partner</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>George Ugwu</b> holds a Bachelor of Science degree from Ahmadu
            Bello University Zaria and a Master's degree from the University of
            Lagos, Akoka. He's a member of the Nigerian Society of Engineers and
            Council for Regulation of Engineering in Nigeria (COREN). He
            commenced his engineering career with AIMS consultants as a graduate
            engineer and later rose to the position of a project engineer
            responsible for the design, detailing, and supervision of civil
            engineering projects. His wealth of experience covers several areas
            of civil engineering with specialization on foundation.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMemberGeorgeUgwu;

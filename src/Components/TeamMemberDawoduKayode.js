import React from "react";
import "../Styles/TeamMembers.css";
import dawodukayode from "../Components/Assets/Beach-House/BH1.jpg";

const TeamMemberDawoduKayode = () => {
  return (
    <>
      <div className="teamMembers">
        <div className="teamMembers-1">
          <div className="divTeamMembersImage">
            <img
              className="teamMembersImage"
              alt="Dawodu Kayode"
              src={dawodukayode}
            />
          </div>
          <div className="teamMembersName">
            <h1>Dawodu Kayode</h1>
            <p>Associate</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Dawodu Kayode</b> holds a Bachelor of Science degree from the
            prestigious University of Lagos, Akoka. He's a member of the
            Nigerian Society of Engineers and Council for Regulation of
            Engineering in Nigeria (COREN). He commenced his engineering career
            with UF-A Consulting as a graduate engineer and later rose to the
            position of project engineer responsible for the design, detailing
            and supervision of civil engineering projects. His wealth of
            experience covers several areas of civil engineering with
            specialization on foundation and tall structures.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMemberDawoduKayode;

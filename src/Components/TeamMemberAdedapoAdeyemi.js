import React from "react";
import "../Styles/TeamMembers.css";
import adedapoadeyemi from "../Components/Assets/Beach-House/BH1.jpg";

const TeamMemberAdedapoAdeyemi = () => {
  return (
    <>
      <div className="teamMembers">
        <div className="teamMembers-1">
          <div className="divTeamMembersImage">
            <img
              className="teamMembersImage"
              alt="Adedapo Adeyemi"
              src={adedapoadeyemi}
            />
          </div>
          <div className="teamMembersName">
            <h1>Adedapo Adeyemi</h1>
            <p>Associate</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Adedapo Adeyemi</b> holds a Bachelor of Science degree in
            Architecture from Olabisi Onabanjo University Ago-Iwoye, Ogun State
            and a Masters in Environmental from the University of Lagos, Akoka.
            A full member of the Architects Registration Council of Nigeria
            (ARCON). He commences his career with AD Consulting Ltd. as an
            Architect-In-Training and later moved to Sheltercrafts Consultants
            rising to the position of project Architect responsible for the
            design, detailing, and supervision of various projects. His wealth
            of experience covers several areas of architectural design and
            specifications.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMemberAdedapoAdeyemi;

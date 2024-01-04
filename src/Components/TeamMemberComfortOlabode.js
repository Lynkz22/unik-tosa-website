import React from "react";
import "../Styles/TeamMembers.css";
import comfortolabode from "../Components/Assets/Beach-House/BH1.jpg";

const TeamMemberComfortOlabode = () => {
  return (
    <>
      <div className="teamMembers">
        <div className="teamMembers-1">
          <div className="divTeamMembersImage">
            <img
              className="teamMembersImage"
              alt="Comfort Olabode"
              src={comfortolabode}
            />
          </div>
          <div className="teamMembersName">
            <h1>Comfort Olabode</h1>
            <p>Associate</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Comfort Olabode</b> holds a Bachelor degree in Law LLB from the
            prestigious University of Ilorin, Kwara State and a Bachelor at Law
            BL from the Nigerian Law School, Lagos. She started her practice at
            Umaru Shinkafi & Co in Sokoto before moving to Biodun Adeyemi &
            Associates Lekki Lagos. She has gained vast experience in Legal
            practices over the years. Her responsibility is to advise on legal
            matters.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMemberComfortOlabode;

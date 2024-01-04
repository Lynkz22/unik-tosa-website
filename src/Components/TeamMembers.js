import React from "react";
import "../Styles/TeamMembers.css";
import TeamMembersOlabodeSaheed from "./TeamMembersOlabodeSaheed";
import TeamMemberGeorgeUgwu from "./TeamMemberGeorgeUgwu";
import TeamMemberFalaseOpemipo from "./TeamMemberFalaseOpemipo";
import TeamMemberComfortOlabode from "./TeamMemberComfortOlabode";
import TeamMemberDawoduKayode from "./TeamMemberDawoduKayode";
import TeamMemberAdedapoAdeyemi from "./TeamMemberAdedapoAdeyemi";

const TeamMembers = () => {
  return (
    <>
      <section className="sectionTeamMembers">
        <div className="divTeamMembers">
          <h1 className="divTeamMembersHeading">OUR TEAM MEMBERS</h1>
        </div>
        <TeamMembersOlabodeSaheed />
        <TeamMemberGeorgeUgwu />
        <TeamMemberFalaseOpemipo />
        <TeamMemberComfortOlabode />
        <TeamMemberDawoduKayode />
        <TeamMemberAdedapoAdeyemi />
      </section>
    </>
  );
};

export default TeamMembers;

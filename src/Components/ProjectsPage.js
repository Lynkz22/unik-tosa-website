import React from "react";
import "../Styles/ProjectsPage.css";
import "../Styles/Introduction.css";
import ProjPicArazYaba from "./ProjPicArazYaba";
import ProjPicGilAutomations from "./ProjPicGilAutomations";
import ProjPicPeriwinkleEstate from "./ProjPicPeriwinkleEstate";
import ProjPicJustriteEleyele from "./ProjPicJustriteEleyele";
import ProjPicJustriteAkobo from "./ProjPicJustriteAkobo";
import ProjPicBourdillon from "./ProjPicBourdillon";
import ProjPicMaryamCourt from "./ProjPicMaryamCourt";
import ProjPicBeachHouse from "./ProjPicBeachHouse";
import ProjPicTCNMaryland from "./ProjPicTCNMaryland";
import OluwoleMall from "./ProjPicOluwoleMall";

const ProjectsPage = () => {
  return (
    <>
      <section className="sectionProjectsPage">
        <div className="divIntroduction">
          <h1 className="introHeading"> WELCOME TO UNIK-TOSA</h1>
          <div className="divIntroText">
            <p className="introText">
              UNIK-TOSA Limited has well-qualified engineers and technicians who
              have significant expertise in both traditional and hi-tech
              engineering, thus providing a single source point for services
              that include detailed designs, construction, project management &
              development engineering. We also provide advisory services to
              other consulting engineering firms, developers, and contractors on
              new development as well as refurbished and upgrading existing
              facilities.
              <br />
              <br />
              We have also carried out pre-conceptual and conceptual designs on
              multi-disciplinary installations involving the provisions of
              detailed cost analysis and projected program schedules. In this
              respect, UNIK-TOSA Limited has been able to advise clients on
              considerations such as demolition, refurbishment and upgrading of
              existing facilities and buildings as well as new development.
              <br />
              <br />
              We have the capacity, resources, and experience to provide
              high-quality multi-disciplinary engineering and project management
              services both onshore and offshore as you will see in our profile.
              These facilities are supported by extensive in-house computer
              facilities offering both engineering analysis and computer-aided
              drafting.
            </p>
          </div>
        </div>
        <ProjPicGilAutomations />
        <ProjPicBeachHouse />
        <ProjPicPeriwinkleEstate />
        <ProjPicArazYaba />
        <ProjPicTCNMaryland />
        <ProjPicJustriteEleyele />
        <ProjPicJustriteAkobo />
        <ProjPicBourdillon />
        <ProjPicMaryamCourt />
        <OluwoleMall />
      </section>
    </>
  );
};

export default ProjectsPage;

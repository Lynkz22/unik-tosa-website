import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Introduction from "../Components/Introduction";
import MvpmHome from "../Components/MvpmHome";
import ServicesHome from "../Components/ServicesHome";
import Phrase from "../Components/Phrase";
import ProjectsHome from "../Components/ProjectsHome";
import GetInTouch from "../Components/GetInTouch";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <MvpmHome />
      <ServicesHome />
      <Phrase />
      <ProjectsHome />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
// import NavVideo from "../Components/Assets/NavVideo.mp4";
import heroImage from "../Components/Assets/BOU 4.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = (props) => {
  return (
    <>
      <div className="divHero">
        {/* <div className={props.cName}> */}

        <img className="heroImage" alt="HeroImg" src={heroImage} />
        <div className="divHeroLinks">
          <div className="divHeroLinks-1">
            <Link to="/Projects">
              <motion.button
                className="divHeroLinks-2"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 0.2, duration: 4 }}
                whileHover={{
                  scale: 1.01,
                  // textShadow: "0px 0px 8px rgb(255, 255, 255)",
                  boxShadow: "0px 0px 4px rgb(255, 255, 255)",
                  backgroundColor: "#180e7f",
                }}
              >
                <p>Our Projects</p>
              </motion.button>
            </Link>
          </div>
          <div className="divHeroLinks-3">
            <Link to="/Contact">
              <motion.button
                className="divHeroLinks-2"
                initial={{ x: "+100%", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 0.2, duration: 4 }}
                whileHover={{
                  scale: 1.01,
                  // textShadow: "0px 0px 8px rgb(255, 255, 255)",
                  boxShadow: "0px 0px 4px rgb(255, 255, 255)",
                  backgroundColor: "#180e7f",
                }}
              >
                <p>Contact Us</p>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

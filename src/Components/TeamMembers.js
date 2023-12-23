import React from "react";
import "../Styles/TeamMembers.css";
import { motion } from "framer-motion";

const TeamMembers = () => {
  return (
    <>
      <section className="sectionTeamMembers">
        <motion.div
          className="divTeamMembers"
          initial={{ opacity: 0, y: "5rem" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h1>OUR TEAM MEMBERS</h1>
        </motion.div>
        <div className="divTeamMembers">
            
        </div>
      </section>
    </>
  );
};

export default TeamMembers;

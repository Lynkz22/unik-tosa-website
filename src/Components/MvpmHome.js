import React from "react";
import "../Styles/Mvpm.css";
import { Link } from "react-router-dom";
// import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MvpmHome = () => {
  // const { ref, inView } = useInView({ threshold: 0 });
  return (
    <>
      <section
        className="sectionMvpmHome"
        // ref={ref}
      >
        <motion.div
          className="divMvpmHome"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            // inView ? 1 : 0
          }}
          transition={{ duration: 3 }}
          // exit={{ opacity: 1 }}
          // whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <i class="fa-solid fa-ranking-star icons"></i>
          <h2>OUR MISSION</h2>
          <p>
            To leverage cutting-edge technology and best practices to deliver
            <br />
            cost-effective and timely construction services
          </p>
        </motion.div>
        <div className="divMvpmHome-1">
          <motion.div
            className="divMvpmHome"
            initial={{ opacity: 0 }}
            // animate={{ opacity: inView ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            // exit={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <i class="fa-solid fa-star-of-david icons"></i>
            <h2>OUR PRINCIPLES</h2>
            <p>Timely execution of high-quality work</p>
          </motion.div>
          <motion.div
            className="divMvpmHome"
            initial={{ opacity: 0 }}
            // animate={{ opacity: inView ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.25 }}
            // exit={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <i class="fa-solid fa-signal icons"></i>
            <h2>OUR METHODS</h2>
            <p>Constant research for cost-effective solutions</p>
          </motion.div>
        </div>
        <motion.div
          className="divMvpmHome"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.3 }}
          // exit={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <i class="fa-solid fa-shapes icons"></i>
          <h2>OUR VISION</h2>
          <p>
            To build a legacy of excellence by delivering high-quality projects
            <br />
            that exceed our clients expectations
          </p>
        </motion.div>
        <div className="divMvpmHome-2">
          <Link to="/About">
            <motion.button
              className="buttonMvpmHome"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.5, delay: 1.5 }}
              viewport={{ once: true }}
            >
              <p>ABOUT US</p>
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MvpmHome;

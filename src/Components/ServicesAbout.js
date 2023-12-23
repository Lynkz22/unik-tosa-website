import React from "react";
import "../Styles/ServicesAbout.css";
import { motion } from "framer-motion";

const ServicesAbout = () => {
  return (
    <>
      <section className="sectionServicesAbout">
        <motion.div
          className="divServicesAbout"
          initial={{ opacity: 0, y: "5rem" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h1>OUR SERVICES</h1>
        </motion.div>
        <div className="divServicesAbout-1">
          <div className="divServicesAboutFlex">
            <motion.div
              className="divServicesAboutText"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h1 className="divServicesAboutHeading">
                CONSTRUCTION AND SUPERVISION
              </h1>
              <p className="divServicesAboutTextContent">
                UNIK-TOSA engages in the physical building of structures, while
                supervising and overseeing the construction process to ensure
                that it is completed on time, within budget, and to the required
                quality standards. We have a team of skilled professionals who
                can manage the construction process from start to finishg
                including architects, engineers, project managers, and
                construction workers.
                <br />
                <br />
                UNIK-TOSA ensures that the construction process runs smoothly
                monitoring the progress of our projects, ensuring that the work
                is being done according to the plans and specifications, and
                managing the workforce. We also ensure that the construction
                site is safe and that all workers are following safety
                protocols.
              </p>
            </motion.div>
            <motion.div
              className="divServicesAboutText-1"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h1 className="divServicesAboutHeading">PROJECT MANAGEMENT</h1>
              <p className="divServicesAboutTextContent">
                UNIK-TOSA is involved in the planning, organizing, and managing
                resources to ensure that a project is completed on time, within
                budget, and to the required quality standards. We are
                responsible for overseeing construction projects from start to
                finish and making sure that the work proceeds on schedule and
                according to plan. We coordinate with the construction team,
                supervise the project execution, define the budget, and allocate
                resources.
                <br />
                <br />
                UNIK-TOSA carries out the several stages of project management,
                including initiation, planning, execution, monitoring and
                control, and closure. We defines the project scope, objectives,
                and deliverables, develop a detailed project plan, including
                timelines, budgets, and resource allocation, oversee the
                construction process, monitor the progress of the project,
                identifies any issues, and takes corrective action as necessary,
                and ensure that all project deliverables have been completed and
                that the project is completed successfully.
              </p>
            </motion.div>
          </div>
          <div className="divServicesAboutFlex">
            <motion.div
              className="divServicesAboutText"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h1 className="divServicesAboutHeading">
                STRUCTURAL CONSULTANCY
              </h1>
              <p className="divServicesAboutTextContent">
                UNIK-TOSA engages in the design and analysis of structures to
                ensure that they are safe, stable, and durable. We work with
                architects, engineers, and contractors to provide expert advice
                on the design and construction of structures.
                <br />
                <br />
                We use advanced software and analytical tools to analyze the
                structural integrity of buildings and other structures. We also
                provide recommendations on the materials and construction
                techniques that should be used to ensure that the structure is
                safe and meets all relevant building codes and regulation.
              </p>
            </motion.div>
            <motion.div
              className="divServicesAboutText-1"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h1 className="divServicesAboutHeading">DETAILED DESIGN</h1>
              <p className="divServicesAboutTextContent">
                UNIK-TOSA is involved in the refining and developing of the
                approved conceptual design to create a complete and precise
                physical description of all parts of a structure. We prepare the
                detailed design stage where the design is refined, and plans are
                set, from which we then present the complete and precise
                physical description of all parts of the structure (the
                blueprints) and how they are fit together
                <br />
                <br />
                UNIK-TOSA collaborates with a team of skilled professionals,
                including Architects, Engineers, and draftsmen, using draftsmen
                advanced software and analytical tools to create detailed
                drawings and specifications that accurately reflect the design
                of the structure.
              </p>
            </motion.div>
          </div>
          <div className="divServicesAboutFlex">
            <motion.div
              className="divServicesAboutText"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h1 className="divServicesAboutHeading">
                STRUCTURAL CONSULTANCY
              </h1>
              <p className="divServicesAboutTextContent">
                UNIK-TOSA undertakes preliminary studies in the earliest stages
                of the project development process to address and clear up
                doubts and address difficulties related to the proposed project
                planning. Our studies are intended to obtain a first idea of the
                potential of the project, without spending a large budget on
                consultancy services
                <br />
                <br />
                UNIK-TOSA also carries out feasibility studies, which is a more
                detailed and comprehensive study that is conducted after the
                pre-feasibility study. Our feasibility studies help to minimize
                the chances of underperforming projects by identifying and
                addressing potential issues early on in the project development
                process.
              </p>
            </motion.div>
            <motion.div
              className="divServicesAboutText-1"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h1 className="divServicesAboutHeading">
                CONSTRUCTION DOCUMENTATION
              </h1>
              <p className="divServicesAboutTextContent">
                UNIK-TOSA is engaged in creation and management of documents
                that are used to guide the construction process from start to
                finish. We provide documentation including a wide range of
                documents, including drawings, specifications, schedules,
                contracts, and reports to ensure that all parties involved in
                the construction process have access to the information they
                need to complete their work effectively.
                <br />
                <br />
                UNIK-TOSA's most important construction documents include
                construction agreements, general conditions, special conditions,
                architectural drawings, schedules, work orders, safety reports,
                certificates of insurance, and subcontractor applications and
                these construction documentation is managed using specialized
                software that allows for easy collaboration and sharing of
                documents between team members.
              </p>
            </motion.div>
          </div>
          <div className="divServicesAboutFlex">
            <motion.div
              className="divServicesAboutText"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h1 className="divServicesAboutHeading">RESOURCE SURVEYS</h1>
              <p className="divServicesAboutTextContent">
                UNIK-TOSA employs the identification and assessment of the
                resources required to complete a construction project, including
                materials, equipment, and labor which we carry out during the
                planning phase of the project to estimate the cost and duration
                of the project.
                <br />
                <br />
                The results of our resource survey are used to develop a
                detailed project plan that includes timelines, budgets, and
                resource allocation. Oure project plan is used to guide the
                construction process from start to finish, ensuring that the
                project is completed on time, within budget, and to the required
                quality standards.
              </p>
            </motion.div>
            <motion.div
              className="divServicesAboutText-1"
              initial={{ opacity: 0, y: "5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h1 className="divServicesAboutHeading">TENDER DOCUMENTS</h1>
              <p className="divServicesAboutTextContent">
                UNIK-TOSA provides tender documents, a set of documents which we
                use to invite vendors to bid on construction projects. We
                provide legally binding agreement between the contractor and the
                employer, defining the obligations and liabilities of each party
                which are intended to obtain a first idea of the potential of
                the project, without spending a large budget on consultancy
                services.
                <br />
                <br />
                We provide the required documents for tendering in construction
                include the contract number, project management plan,
                specification of work, bid documents, contract specifications,
                quality assurance plan, and contact details for the contractor.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAbout;

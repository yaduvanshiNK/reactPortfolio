import React from "react";
import { motion } from "framer-motion";
import "./TestimonialCard.scss";

const Reviewers = ({ icon, name, designation, companyName }) => {
  return (
    <motion.div
      whileInView={{
        opacity: [0, 1],
        y: [50, 0],
        transition: { type: "linear" },
      }}
      className="reviewer"
    >
      <div className="reviewer-icon">
        <img src={icon} alt="user-profile-icon" />
      </div>
      <div className="reviewer-info">
        <h1>{name}</h1>
        <p>
          {designation}, <span>{companyName}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Reviewers;

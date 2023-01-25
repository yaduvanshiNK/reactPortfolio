import React from "react";
import { motion } from "framer-motion";
import "./IntroCard.scss";

const Intro = ({ title, icon, desc, count }) => {
  return (
    <motion.div
      whileTap={{
        scale: [1, 0.95],
      }}
      whileHover={{
        scale: [1, 1.02],
      }}
      className="intro-card-container"
    >
      <div className="card-heading">
        <h1>{title}</h1>
        <img src={icon} />
      </div>
      <p>{desc}</p>
      <a href="#">{count}</a>
    </motion.div>
  );
};

export default Intro;

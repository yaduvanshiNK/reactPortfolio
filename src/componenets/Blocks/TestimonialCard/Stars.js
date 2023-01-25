import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TestimonialCard.scss";
import images from "../../../constants/imageRef";
const Stars = ({ number }) => {
  const stars = [];
  for (let i = 1; i <= number; i++) {
    stars.push(`${images.star}`);
  }

  const starContainer = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const starsAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      variants={starContainer}
      whileInView="show"
      initial="hidden"
      className="stars"
    >
      {stars.map((icon) => (
        <motion.img variants={starsAnimation} src={icon} />
      ))}
    </motion.div>
  );
};

export default Stars;

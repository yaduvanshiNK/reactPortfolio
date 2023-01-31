import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./TestimonialCard.scss";
import images from "../../../constants/imageRef";
const Stars = ({ number }) => {
  const [prevNumber, setPrevNumber] = useState(number);
  useEffect(() => {
    setPrevNumber(number);
  }, [number]);

  const stars = [];
  for (let i = 1; i <= number; i++) {
    stars.push(`${images.star}`);
  }

  const starContainer = {
    hidden: { opacity: 0 },
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
      whileInView={prevNumber !== number ? "hidden" : "show"}
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

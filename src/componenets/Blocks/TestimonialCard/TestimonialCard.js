import React from "react";
import { motion } from "framer-motion";
import iamges from "../../../constants/imageRef";
import Stars from "./Stars";
import "./TestimonialCard.scss";
const TestimonialCard = ({ number, review }) => {
  return (
    <div className="testimonial-card-conainer">
      <div className="rating">
        <Stars number={number} />
        <motion.span
          whileInView={{
            opacity: [0, 1],
            x: [-10, 0],
            transition: {
              type: "lnear",
              delay: 0.2,
            },
          }}
        >
          {number}.0 Rating
        </motion.span>
        <img className="quote" src={iamges.quotesSign} />
      </div>
      <motion.div className="review">{review}</motion.div>
    </div>
  );
};

export default TestimonialCard;

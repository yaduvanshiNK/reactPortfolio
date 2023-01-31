import React, { useEffect, useState } from "react";
import { animate, motion, useAnimation } from "framer-motion";
import iamges from "../../../constants/imageRef";
import Stars from "./Stars";
import "./TestimonialCard.scss";
const TestimonialCard = ({ number, review }) => {
  const [currentReview, setCurrentReview] = useState(review);
  const ratingController = useAnimation();
  const reviewController = useAnimation();
  useEffect(() => {
    setCurrentReview(review);
  }, [review]);
  useEffect(() => {
    ratingController.start({
      x: [-10, 0],
      opacity: [0, 1],
      transition: {
        type: "spring",
      },
    });
  }, [number]);
  useEffect(() => {
    reviewController.start(reviewVariant);
  }, [currentReview]);

  const reviewVariant = {
    opacity: [0, 1],
    y: [20, 0],
    transition: {
      duration: 0.2,
    },
  };

  return (
    <div className="testimonial-card-conainer">
      <div className="rating">
        <Stars number={number} />
        <motion.span animate={ratingController}>{number}.0 Rating</motion.span>
        <img className="quote" src={iamges.quotesSign} />
      </div>
      <motion.div
        animate={reviewController}
        whileInView={reviewVariant}
        className="review"
      >
        {currentReview}
      </motion.div>
    </div>
  );
};

export default TestimonialCard;

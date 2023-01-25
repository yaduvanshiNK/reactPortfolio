import React, { useState } from "react";
import "./Testimonial.scss";
import { motion } from "framer-motion";
import TestimonialCard from "../Blocks/TestimonialCard/TestimonialCard";
import TestimonialData from "../../constants/TestimonialData";
import Reviewers from "../Blocks/TestimonialCard/Reviewers";
const Testimonial = () => {
  const [reviews, setReviews] = useState(0);
  const [star, setStar] = useState(5);

  return (
    <div className="testimonial-container">
      <div id="tetstimonial">
        <div className="testimonial-heading">
          <motion.h1
            whileInView={{
              opacity: [0, 1],
              x: [-10, 0],
              transition: {
                type: "spring",
              },
            }}
          >
            Testimonials
          </motion.h1>
          <motion.span
            whileInView={{
              width: [0, 300],
              opacity: [0.5, 1],
              x: [-30, 0],
              transition: {
                delay: 0.2,
                duration: 0.3,
              },
            }}
          ></motion.span>
        </div>
        <TestimonialCard
          number={star}
          review={TestimonialData[reviews].review}
        />
        <div className="reviewers-conatiner">
          <div
            onClick={() => {
              setReviews(0);
              setStar(5);
            }}
          >
            <Reviewers
              icon={TestimonialData[0].userImg}
              name={TestimonialData[0].userName}
              designation={TestimonialData[0].designation}
              companyName={TestimonialData[0].companyName}
            />
          </div>

          <div
            onClick={() => {
              setReviews(1);
              setStar(4);
            }}
          >
            <Reviewers
              icon={TestimonialData[1].userImg}
              name={TestimonialData[1].userName}
              designation={TestimonialData[1].designation}
              companyName={TestimonialData[1].companyName}
            />
          </div>
          <div
            onClick={() => {
              setReviews(2);
              setStar(4);
            }}
          >
            <Reviewers
              icon={TestimonialData[2].userImg}
              name={TestimonialData[2].userName}
              designation={TestimonialData[2].designation}
              companyName={TestimonialData[2].companyName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

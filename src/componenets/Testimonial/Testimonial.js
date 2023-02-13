import React, { useState } from "react";
import "./Testimonial.scss";
import { motion } from "framer-motion";
import TestimonialCard from "../Blocks/TestimonialCard/TestimonialCard";
import TestimonialData from "../../constants/TestimonialData";
import Reviewers from "../Blocks/TestimonialCard/Reviewers";
const Testimonial = () => {
  const [reviews, setReviews] = useState(0);
  const [star, setStar] = useState(TestimonialData[0].starCount);
  return (
    <div id="tetstimonial">
      <div className="testimonial-container">
        <div className="testimonial-heading">
          <motion.span
            viewport={{ once: true }}
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { type: "linear" },
            }}
          >
            Rave Reviews From Our Clients
          </motion.span>
          <motion.h1
            viewport={{ once: true }}
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { type: "linear", delay: 0.05 },
            }}
          >
            Testimonials
          </motion.h1>
        </div>
        <TestimonialCard
          number={star}
          review={TestimonialData[reviews].review}
        />
        <div className="reviewers-conatiner">
          <div
            onClick={() => {
              setReviews(0);
              setStar(TestimonialData[0].starCount);
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
              setStar(TestimonialData[1].starCount);
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
              setStar(TestimonialData[2].starCount);
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

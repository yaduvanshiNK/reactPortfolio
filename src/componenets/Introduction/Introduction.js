import React from "react";
import "./Introduction.scss";
import IntroCard from "../Blocks/Intro/IntroCard";
import introductionData from "../../constants/IntroData";
import { delay, motion } from "framer-motion";
import { AnimatedSocialIcon } from "react-animated-social-icons";

const Introduction = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="introduction-container">
      <div id="introduction">
        <motion.div
          viewport={{ once: true }}
          className="cards-conatiner"
          variants={container}
          initial="hidden"
          whileInView={"show"}
        >
          <IntroCard
            title={introductionData[0].title}
            icon={introductionData[0].icon}
            desc={introductionData[0].desc}
            count={introductionData[0].projectCount}
          />
          <IntroCard
            title={introductionData[1].title}
            icon={introductionData[1].icon}
            desc={introductionData[1].desc}
            count={introductionData[1].projectCount}
          />
          <IntroCard
            title={introductionData[2].title}
            icon={introductionData[2].icon}
            desc={introductionData[2].desc}
            count={introductionData[2].projectCount}
          />
        </motion.div>

        <motion.div
          className="intro-section"
          viewport={{ once: true }}
          whileInView={{
            y: [100, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.1,
            },
          }}
        >
          <span>Introduce</span>
          <h1>
            <motion.span
              whileInView={{
                rotate: [0, -10, 10],
                transition: {
                  repeat: 1,
                  duration: 0.5,
                  type: "spring",
                  mass: 0.5,
                },
              }}
              style={{
                display: "inline-block",
                transformOrigin: "bottom  center ",
              }}
            >
              👋
            </motion.span>
            <br /> Neeraj Kumar Yadav
          </h1>
          <p>
            With a keen eye for design and a passion for crafting intuitive user
            experiences, I am a Front-End Web Developer who can turn even the
            most complex ideas into visually stunning and responsive websites.
            <br />
            <br />
            My expertise in HTML, CSS, and JavaScript allows me to breathe life
            into static designs and bring them to the forefront of the digital
            world. Whether it's a simple brochure website or a full-fledged web
            application, I am always up for the challenge and dedicated to
            delivering exceptional results.
          </p>
          <div className="intro-socials-container">
            <AnimatedSocialIcon
              brandName="instagram"
              url="https://www.instagram.com/yaduvanshink_/"
              animation="bounce"
              defaultColor="#64f4ac"
              hoverColor="#fff"
              width="2rem"
              animationDuration={0.8}
            />
            <AnimatedSocialIcon
              brandName="linkedin"
              url="https://www.linkedin.com/in/yaduvanshink/"
              animation="bounce"
              defaultColor="#64f4ac"
              hoverColor="#fff"
              width="2rem"
              animationDuration={0.8}
            />
            <AnimatedSocialIcon
              brandName="github"
              url="https://github.com/yaduvanshiNK"
              animation="bounce"
              defaultColor="#64f4ac"
              hoverColor="#fff"
              width="2rem"
              animationDuration={0.8}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;

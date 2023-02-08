import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/imageRef";
import "./Header.scss";

const Header = () => {
  const skillsImages = [images.htmlImg, images.sassImg, images.reactImg];
  const experience = [
    { year: 12, name: `years  experience` },
    { year: 122, name: ` PROJECTS COMPLETED ON 18 COUNTRIES` },
  ];

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      },
    },
  };

  return (
    <header id="hero-section">
      <div className="app-hero-container">
        <div className="hero-info">
          <motion.div
            viewport={{ once: true }}
            whileInView={{
              width: "12rem",
              transition: {
                duration: 0.4,
              },
            }}
          >
            <span>Front-End Developer</span>
          </motion.div>
          <h1>
            Code is my canvas, <br /> let's create!
          </h1>
          <p>
            Front-end talk is just hot air, <br /> show me the HTML and CSS
            magic in the code.
          </p>
          <a href="#"> Let's Chat!</a>
        </div>
        <div className="hero-bg">
          <div className="hero-image">
            <motion.img
              viewport={{ once: true }}
              animate={{
                y: [100, 0],
                opacity: [0, 1],
                transition: {
                  ease: "easeOut",
                  delay: 0.2,
                },
              }}
              src={images.profile}
              alt="profile-pcture-yaduvanshiNK"
            />
          </div>
          <div className="hero-bg-circle">
            <motion.img
              viewport={{ once: true }}
              animate={{
                scale: [0, 1],
                opacity: [0, 1],
              }}
              transition={{
                duration: 0.4,
              }}
              src={images.bgCircle}
              alt="background-circle"
            />
            <motion.div className="header-skills-circle">
              {skillsImages.map((image) => (
                <motion.div
                  viewport={{ once: true }}
                  whileInView={scaleVariants.whileInView}
                >
                  <img src={image} alt="front-end-texh-stack" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="project-summary">
          {experience.map((data) => (
            <div className="each-project-summary">
              <h1>{data.year}</h1>
              <div>{data.name}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

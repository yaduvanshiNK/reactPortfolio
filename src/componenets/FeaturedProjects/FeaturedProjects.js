import React from "react";
import { motion } from "framer-motion";
import "./FeaturedProjects.scss";
import FeaturedProjectsData from "../../constants/FeaturedProjectsData";
import Project from "./Project";

const FeaturedProjects = () => {
  return (
    <div className="FeaturedProjects-container">
      <div className="featuredProject-heading">
        <motion.h1
          whileInView={{
            opacity: [0, 1],
            x: [-10, 0],
            transition: {
              type: "spring",
            },
          }}
        >
          Some Things I’ve Built
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

      <div id="FeaturedProjects">
        <Project
          websitePreview={FeaturedProjectsData[0].websitePreview}
          projectName={FeaturedProjectsData[0].projectName}
          projectDesc={FeaturedProjectsData[0].projectDesc}
          usedTech={FeaturedProjectsData[0].usedTech}
          liveLink={FeaturedProjectsData[0].liveLink}
          gitHubLink={FeaturedProjectsData[0].gitHubLink}
        />
        <Project
          websitePreview={FeaturedProjectsData[1].websitePreview}
          projectName={FeaturedProjectsData[1].projectName}
          projectDesc={FeaturedProjectsData[1].projectDesc}
          usedTech={FeaturedProjectsData[1].usedTech}
          liveLink={FeaturedProjectsData[1].liveLink}
          gitHubLink={FeaturedProjectsData[1].gitHubLink}
        />
        <Project
          websitePreview={FeaturedProjectsData[2].websitePreview}
          projectName={FeaturedProjectsData[2].projectName}
          projectDesc={FeaturedProjectsData[2].projectDesc}
          usedTech={FeaturedProjectsData[2].usedTech}
          liveLink={FeaturedProjectsData[2].liveLink}
          gitHubLink={FeaturedProjectsData[2].gitHubLink}
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;

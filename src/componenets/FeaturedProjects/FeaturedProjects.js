import React from "react";
import { motion } from "framer-motion";
import "./FeaturedProjects.scss";
import FeaturedProjectsData from "../../constants/FeaturedProjectsData";
import Project from "./Project";

const FeaturedProjects = () => {
  return (
    <div id="projects">
      <div className="FeaturedProjects-container">
        <div className="featuredProject-heading">
          <motion.span
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { type: "linear" },
            }}
          >
            Some Things I’ve Built
          </motion.span>
          <motion.h1
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { type: "linear", delay: 0.05 },
            }}
          >
            My Projects
          </motion.h1>
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
    </div>
  );
};

export default FeaturedProjects;

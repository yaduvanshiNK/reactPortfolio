import React from "react";
import { motion } from "framer-motion";
import "./FeaturedProjects.scss";
import images from "../../constants/imageRef";
const Project = ({
  websitePreview,
  projectName,
  projectDesc,
  usedTech,
  liveLink,
  gitHubLink,
}) => {
  return (
    <motion.div
      whileInView={{
        opacity: [0, 1],
        y: [50, 0],
        transition: { type: "linear" },
      }}
      className="project-container"
    >
      <motion.div
        className="project-preview"
        whileInView={{
          opacity: [0, 1],
          y: [50, 0],
          transition: { type: "linear", delay: 0.05 },
        }}
      >
        <img src={websitePreview} alt="project-preview" />
      </motion.div>
      <div className="project-desc">
        <span>Featured Project</span>
        <h1>{projectName}</h1>
        <p className="project-info">{projectDesc}</p>
        <p className="tech-container">
          {usedTech.map((tech) => (
            <span key={`tech-${tech}`}>{tech}</span>
          ))}
        </p>
        <div className="project-urls">
          <a href={gitHubLink} target="_blank" className="project-github">
            <motion.img
              src={images.lineGithub}
              alt="project-source-code"
              whileHover={{
                scale: 1.1,
              }}
            />
          </a>
          <a href={liveLink} target="_blank" className="project-share">
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              src={images.lineShare}
              alt="live-project-url"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;

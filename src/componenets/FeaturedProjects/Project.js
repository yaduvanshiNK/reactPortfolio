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
    <div className="project-container">
      <div className="project-preview">
        <img src={websitePreview} />
      </div>
      <div className="project-desc">
        <span>Featured Project</span>
        <h1>{projectName}</h1>
        <p className="project-info">{projectDesc}</p>
        <p>
          {usedTech.map((tech) => (
            <span key={`tech-${tech}`}>{tech}</span>
          ))}
        </p>
        <div className="project-urls">
          <a href={gitHubLink} target="_blank" className="project-github">
            <motion.img
              src={images.lineGithub}
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
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

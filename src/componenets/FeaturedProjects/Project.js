import React from "react";

const Project = ({ websitePreview, projectName, projectDesc }) => {
  return (
    <div className="project-container">
      <div className="project-preview">
        <img src={websitePreview} />
      </div>
      <div className="project-desc">
        <span>Featured Project</span>
        <h1>{projectName}</h1>
        <p>{projectDesc}</p>
      </div>
    </div>
  );
};

export default Project;

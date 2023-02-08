import React from "react";
import "./TestimonialCard.scss";

const Reviewers = ({ icon, name, designation, companyName }) => {
  return (
    <div className="reviewer">
      <div className="reviewer-icon">
        <img src={icon} alt="user-profile-icon" />
      </div>
      <div className="reviewer-info">
        <h1>{name}</h1>
        <p>
          {designation}, <span>{companyName}</span>
        </p>
      </div>
    </div>
  );
};

export default Reviewers;

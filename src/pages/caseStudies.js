import React from "react";
// import project1 from "../assets/project1";

const projects = [
  {
    id: 1,

    img: "project1",
  },
];

const Projects = () => {
  return (
    <div className="project">
      <div className="container">
        <div className="row">
          <h3>Projects</h3>
        </div>

        <img
          className="img"
          src={require(`../assets/project1.png`)}
          // alt={caseItem.title}
        />

        <div className="project-name">
          <h3>A sneakers e-commerce website</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;

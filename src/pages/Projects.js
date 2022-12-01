import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  console.log(projects);

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project._id} className="card">
            <Link to={`/projects/${project._id}`}>{project.name}</Link>
            <p>{project.year}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

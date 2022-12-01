import React from "react";
import { Link, useParams } from "react-router-dom";
import QueryStringExample from "../components/QueryStringExample";

const ProjectDetailsPage = (props) => {
  const { projectId } = useParams();
  const foundProject = props.projectsList.find((singleProject) => {
    return singleProject._id === projectId;
  });
  foundProject && console.log(foundProject);
  return (
    <div>
      <h3>{foundProject.name}</h3>
      <h4>{foundProject.description}</h4>
      <h5>{foundProject.technologies}</h5>
    </div>
  );
};

export default ProjectDetailsPage;

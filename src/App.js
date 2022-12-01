import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import Projects from "./pages/Projects";
import projects from "./projects-data.json";
import QueryStringExample from "./components/QueryStringExample";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    setProjectsList(projects);
  }, []);

  projects && console.log(projectsList);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route
          path="/projects/:projectId"
          element={<ProjectDetailsPage projectsList={projectsList} />}
        />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/test" element={<QueryStringExample />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import Project from "./Project";
import { projects } from "../../../projects/data";

import { Container } from "./styles";

const Projects: React.FC = () => {
  return (
    <Container>
      {projects.map((project,index) => (
        <Project project={{ ...project }} key={index}/>
      ))}
    </Container>
  );
};

export default Projects;

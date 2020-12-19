import React from "react";
import Project from "./Project";

import { Container } from "./styles";

const Projects: React.FC = () => {
  return (
    <Container>
      <Project />
      <Project />
      <Project />
    </Container>
  );
};

export default Projects;

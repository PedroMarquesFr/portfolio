import React from "react";
import Project from "../../components/Section/Projects/Project";

import { Container } from "./styles";

interface info {
  instituition: string;
  title: string;
  description: string;
  tags: string[];
  pathname: string;
}
interface project {
  project: info;
}

const About: React.FC = () => {
  return (
    <Container>
      <Project
        project={{
          instituition: "",
          title: "Sobre mim",
          description: "fdfdsfdsfdsfdsfdsfdsf",
          tags: [],
          pathname : "https://fdsffdsf.com",
        }}
      />
    </Container>
  );
};

export default About;

import React from "react";
import Project from "../../components/Section/Projects/Project";

import { Container } from "./styles";

const Contact: React.FC = () => {
  return (
    <Container>
      <Project
        project={{
          instituition: "Email",
          title: "",
          description: "pedromarques1011@gmail.com",
          tags: [],
          pathname: "mailto:pedromarques1011@gmail.com",
        }}
      />
      <Project
        project={{
          instituition: "LinkedIn",
          title: "",
          description: "https://www.linkedin.com/in/pedro-marques-4a8609182/",
          tags: [],
          pathname: "https://www.linkedin.com/in/pedro-marques-4a8609182/",
        }}
      />
    </Container>
  );
};

export default Contact;

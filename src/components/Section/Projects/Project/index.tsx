import React from "react";
// import { DefaultTag, ReactTag, CSSTag, HTMLTag, JSTag, StyledCompTag } from "../../../Tags/styles";
import { Container, InstutitionName } from "./styles";
import {
  DefaultDot,
} from "../../../Tags/styles";

interface info {
  instituition: string;
  title: string;
  description: string;
  tags: string[];
}
interface project {
  project: info;
}

const Project: React.FC<project> = ({ project }) => {
  const {instituition,title,description, tags} = project;
  return (
    <Container>
      <InstutitionName>{instituition}</InstutitionName>
      <h1>{title}</h1>
      <p>
        {description}
      </p>
      <DefaultDot/>
    </Container>
  );
};

export default Project;

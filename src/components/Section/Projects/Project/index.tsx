import React from "react";
// import { DefaultTag, ReactTag, CSSTag, HTMLTag, JSTag, StyledCompTag } from "../../../Tags/styles";
import { Container, InstutitionName, TagWrapper, UnstyledLink } from "./styles";
import { DefaultDot } from "../../../Tags/styles";

interface info {
  instituition: string;
  title: string;
  description: string;
  tags: string[];
  pathname:string;
}
interface project {
  project: info;
}

const Project: React.FC<project> = ({ project }) => {
  const { instituition, title, description, tags, pathname } = project;
  return (
    <Container>
      <UnstyledLink
        to={{ pathname }}
        target="_blank"
      >
        <InstutitionName>
          {instituition}{" "}
          <TagWrapper>
            {tags.map((tag) => (
              <DefaultDot tag={tag} />
            ))}
          </TagWrapper>
        </InstutitionName>
        <h1>{title}</h1>
        <p>{description}</p>
      </UnstyledLink>
    </Container>
  );
};

export default Project;

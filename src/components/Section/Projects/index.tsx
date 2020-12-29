import React from "react";
import Project from "./Project";

import { connect } from "react-redux";

import { projects } from "../../../projects/data";

import { Container } from "./styles";

interface Props {
  tag: string;
}

const Projects: React.FC<Props> = ({ tag }) => {
  const filteredProjects = projects.filter((project) =>
    project.tags.includes(tag)
  );
  return (
    <Container>
      {filteredProjects.map((project, index) => (
        <Project project={{ ...project }} key={index} />
      ))}
    </Container>
  );
};

interface RootState {
  TagChoice: {
    tag: string;
  };
}

const mapStateToProps = (store: RootState) => ({
  tag:store.TagChoice.tag,
});

export default connect(mapStateToProps)(Projects);

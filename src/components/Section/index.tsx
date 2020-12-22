import React from "react";
import Info from './Info';
import Projects from './Projects';

import { Container} from "./styles";

const Section: React.FC = () => {
  return (
    <Container>
      <Info/>
      <Projects/>
    </Container>
  );
};

export default Section;

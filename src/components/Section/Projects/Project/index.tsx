import React from "react";
// import { DefaultTag, ReactTag, CSSTag, HTMLTag, JSTag, StyledCompTag } from "../../../Tags/styles";
import { Container, InstutitionName} from "./styles";

const Project: React.FC = () => {
  return (
    <Container>
      <InstutitionName>instituição</InstutitionName>
      <h1>Nome do projeto</h1>
      <p>
        descrição do projeto Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Temporibus, hic. Culpa nesciunt consequatur illo corporis eligendi
        itaque quasi cumque. Esse ea architecto atque impedit possimus ad. Quas
        dicta assumenda quis?
      </p>
    </Container>
  );
};

export default Project;

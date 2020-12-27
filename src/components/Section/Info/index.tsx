import React from "react";

import { Container, Resume, ProfileImg, Title, TagWrapper } from "./styles";
import { HrLong} from "../../Ornament/style";
import {
  ReactTag,
  CSSTag,
  HTMLTag,
  JSTag,
  StyledCompTag,
} from "../../Tags/styles";

const Info: React.FC = () => {
  return (
    <Container>
      <ProfileImg src="https://i.ibb.co/BKFL5GX/imagem.png"></ProfileImg>
      <HrLong />
      <Title>Hi, I'm Pedro</Title>
      <Resume bold={false}>
        I have been developing some React applications over the year, from
        movies CRUD with route and asynchronicity to online stores using Mercado
        Livre API, which simulates a product purchase with rating and cart
        mechanisms, all done with core and advanced React concepts like
        component life cycle, hooks, context API. I Love Redux!
      </Resume>

      <Resume bold={true}>
        The objective of this site is to document by the projects my life,
        feelings, and evolution as a programmer, and show what I'm able to do as
        a software developer, this site is a mix of a portfolio and a public
        diary.
      </Resume>
      <TagWrapper>
        <ReactTag />
        <CSSTag />
        <HTMLTag />
        <JSTag />
        <StyledCompTag />
      </TagWrapper>
    </Container>
  );
};

export default Info;

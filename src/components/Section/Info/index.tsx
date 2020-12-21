import React from "react";

import { Container, Resume, ProfileImg, Title } from "./styles";
import { HrLong } from "../../Ornament/style";

const Info: React.FC = () => {
  return (
    <Container>
      <ProfileImg src="https://i.ibb.co/BKFL5GX/imagem.png"></ProfileImg>
      <HrLong />
      <Title>Hi, I'm Pedro</Title>
      <Resume>
        I have been developing some React applications, from movies CRUD with
        route and asynchronicity to online stores using Mercado Livre API, which
        simulates a product purchase with rating and cart mechanisms, all done
        with core and advanced React concepts like component life cycle, hooks,
        context API. I Love Redux!
      </Resume>
    </Container>
  );
};

export default Info;

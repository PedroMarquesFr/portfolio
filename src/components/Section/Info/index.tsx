import React from "react";

import { Container, Resume, ProfileImg,Title } from "./styles";

const Info: React.FC = () => {
  return (
    <Container>
      <ProfileImg src="https://i.ibb.co/BKFL5GX/imagem.png"></ProfileImg>
      <Title>Oi, sou o Pedro</Title>
      <Resume>
        Já desenvolvi diversas aplicações em React, desde CRUD de filmes com
        roteamento e assincronicidade a loja online, feita com API do Mercado
        Livre, que simula a compra de um produto, avaliações e adição ao
        carrinho, sempre me preocupo em usar as melhores práticas do mercado. Em
        todos os projetos me esforço para desenvolver uma boa UI embasada no
        estudo de grid, formas, cores, tipografia, sempre focando na harmônia e
        consistência.
      </Resume>
    </Container>
  );
};

export default Info;

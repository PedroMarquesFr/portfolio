import React, { useState } from "react";

import { Container, Resume, ProfileImg, Title, TagWrapper, P } from "./styles";
import { HrLong } from "../../Ornament/style";
import {
  ReactTag,
  CSSTag,
  HTMLTag,
  JSTag,
  TSTag,
  StyledCompTag,
} from "../../Tags/styles";

const Info: React.FC = () => {
  const [tag, setTag] = useState("");
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
        a software developer, this site is a <P>mix</P> of a <P>portfolio</P>{" "}
        and a <P>public diary</P>.
      </Resume>
      <TagWrapper>
        <input type="radio" id="js" name="tag" onChange={({target:{id}}) => setTag(id)} />
        <label htmlFor="js">
          <JSTag />
        </label>
        <input type="radio" id="ts" name="tag" onChange={({target:{id}}) => setTag(id)}/>
        <label htmlFor="ts">
          <TSTag />
        </label>
        <input type="radio" id="re" name="tag" onChange={({target:{id}}) => setTag(id)}/>
        <label htmlFor="re">
          <ReactTag />
        </label>
        <input type="radio" id="html" name="tag" onChange={({target:{id}}) => setTag(id)}/>
        <label htmlFor="html">
          <HTMLTag />
        </label>
        <input type="radio" id="css" name="tag" onChange={({target:{id}}) => setTag(id)}/>
        <label htmlFor="css">
          <CSSTag />
        </label>
        <input type="radio" id="sc" name="tag" onChange={({target:{id}}) => setTag(id)}/>
        <label htmlFor="sc">
          <StyledCompTag />
        </label>
        <p>{tag}</p>
      </TagWrapper>
    </Container>
  );
};

export default Info;

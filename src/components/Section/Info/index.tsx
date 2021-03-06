import React from "react";

import { connect } from "react-redux";
import { changeTag } from "../../../store/ducks/TagChoice/actions";

import {
  Container,
  Resume,
  ProfileImg,
  Title,
  Title2,
  TagWrapper,
  P,
  RadioInput,
} from "./styles";
import { HrLong } from "../../Ornament/style";
import {
  AllTag,
  ReactTag,
  CSSTag,
  HTMLTag,
  JSTag,
  TSTag,
  StyledCompTag,
  ReduxTag,
  NodeTag,
  NextTag
} from "../../Tags/styles";

interface func {
  changeTag: (tag: string) => void;
}

const Info: React.FC<func> = ({ changeTag }) => {
  return (
    <Container>
      <ProfileImg src="https://i.ibb.co/8c0NYFX/20210316-112521-2.jpg"></ProfileImg>
      <HrLong />
      <Title>Hi, I'm Pedro</Title>

      <Resume bold={false}>
        The site objective is to document by the projects my life, feelings, and
        evolution as a programmer, and show what I'm able to do as a software
        developer, this site is a <P>mix</P> of a <P>portfolio</P> and a{" "}
        <P>public diary</P>.
      </Resume>
      <Title2>Filter projects by tag</Title2>
      <TagWrapper>
        <RadioInput
          type="radio"
          id=" "
          name="tag"
          onChange={({ target: { id } }) => changeTag(id)}
        />
        <label htmlFor=" ">
          <AllTag />
        </label>
        <RadioInput
          type="radio"
          id="js"
          name="tag"
          onChange={({ target: { id } }) => changeTag(id)}
        />
        <label htmlFor="js">
          <JSTag />
        </label>
        <RadioInput
          type="radio"
          id="ts"
          name="tag"
          onChange={({ target: { id } }) => changeTag(id)}
        />
        <label htmlFor="ts">
          <TSTag />
        </label>
        <RadioInput
          type="radio"
          id="react"
          name="tag"
          onChange={({ target: { id } }) => changeTag(id)}
        />
        <label htmlFor="react">
          <ReactTag />
        </label>
        <RadioInput
          type="radio"
          id="html"
          name="tag"
          onChange={({ target: { id } }) => changeTag(id)}
        />
        <label htmlFor="html">
          <HTMLTag />
        </label>
        <RadioInput
          type="radio"
          id="css"
          name="tag"
          onChange={({ target: { id } }) => changeTag(id)}
        />
        <label htmlFor="css">
          <CSSTag />
        </label>
        <RadioInput
          type="radio"
          id="sc"
          name="tag"
          onChange={({ target: { id } }) => changeTag(id)}
        />
        <label htmlFor="sc">
          <StyledCompTag />
        </label>
        <RadioInput
          type="radio"
          id="redux"
          name="tag"
          onChange={({ target: { id } }) => changeTag(id)}
        />
        <label htmlFor="redux">
          <ReduxTag />
        </label>
        <RadioInput
          type="radio"
          id="node"
          name="tag"
          onChange={({ target: { id } }) => changeTag(id)}
        />
        <label htmlFor="node">
          <NodeTag />
        </label>
        <RadioInput
          type="radio"
          id="next"
          name="tag"
          onChange={({ target: { id } }) => changeTag(id)}
        />
        <label htmlFor="next">
          <NextTag />
        </label>
      </TagWrapper>
    </Container>
  );
};

const mapDispatchToProps = { changeTag };

export default connect(null, mapDispatchToProps)(Info);

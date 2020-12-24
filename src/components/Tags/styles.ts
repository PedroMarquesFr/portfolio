import styled from "styled-components";

export const DefaultTag = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding:0 5px;
  margin:4px;
  border-radius: 6px;
  background-color: #222531;
  &::before {
    content: "DEFLT";
  }
  color: white;
  font-weight:600;
`;

export const ReactTag = styled(DefaultTag)`
    background-color: #003451;
    &::before {
    content: "React";
  }
   color: #F9F8F8;/* 31322F*/
`;
export const CSSTag = styled(DefaultTag)`
    background-color: #001252;
    &::before {
    content: "CSS";
  }
  color: #F9F8F8;
`;
export const HTMLTag = styled(DefaultTag)`
    background-color: #521D00;
    &::before {
    content: "HTML";
  }
  color: #F9F8F8;
`;
export const JSTag = styled(DefaultTag)`
    background-color: #524000;
    &::before {
    content: "JavaScript";
  }
  color: #F9F8F8;
`;
export const StyledCompTag = styled(DefaultTag)`
    background-color: #53000F;
    &::before {
    content: "StyledComp";
  }
  color: #F9F8F8;
`;
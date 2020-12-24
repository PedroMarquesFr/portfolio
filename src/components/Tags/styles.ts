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
    background-color: ${props=>props.theme.colors.react};
    &::before {
    content: "React";
  }
   color: ${props=>props.theme.colors.textsec};/* 31322F*/
`;
export const CSSTag = styled(DefaultTag)`
    background-color: ${props=>props.theme.colors.css};
    &::before {
    content: "CSS";
  }
  color: ${props=>props.theme.colors.textsec};
`;
export const HTMLTag = styled(DefaultTag)`
    background-color: ${props=>props.theme.colors.html};
    &::before {
    content: "HTML";
  }
  color: ${props=>props.theme.colors.textsec};
`;
export const JSTag = styled(DefaultTag)`
    background-color: ${props=>props.theme.colors.js};
    &::before {
    content: "JavaScript";
  }
  color: ${props=>props.theme.colors.textsec};
`;
export const StyledCompTag = styled(DefaultTag)`
    background-color: ${props=>props.theme.colors.sc};
    &::before {
    content: "StyledComp";
  }
  color: ${props=>props.theme.colors.textsec};
`;
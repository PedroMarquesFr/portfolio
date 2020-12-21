import styled from "styled-components";

export const DefaultTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 60px;
  margin:2px;
  border-radius: 6px;
  background-color: #222531;
  &::before {
    content: "DEFLT";
  }
  color: white;
  font-weight:600;
`;

export const ReactTag = styled(DefaultTag)`
    background-color: #015381;
    &::before {
    content: "React";
  }
  color: #31322F;
`;
export const CSSTag = styled(DefaultTag)`
    background-color: #001C80;
    &::before {
    content: "CSS";
  }
  color: #31322F;
`;
export const HTMLTag = styled(DefaultTag)`
    background-color: #7D2D00;
    &::before {
    content: "HTML";
  }
  color: #31322F;
`;
export const JSTag = styled(DefaultTag)`
    background-color: #6F5600;
    &::before {
    content: "JS";
  }
  color: #31322F;
`;
export const StyledCompTag = styled(DefaultTag)`
    background-color: #840018;
    &::before {
    content: "StyC";
  }
  color: #F9F8F8;
`;
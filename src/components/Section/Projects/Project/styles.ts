import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.frontItems};
  border-radius: 24px;
  p {
    opacity: 0.8;
    font-size: 18px;
    line-height: 1.5;
  }
  h1 {
    font-size: 21px;
  }
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 12px 0px rgba(50, 50, 50, 0.05);
    padding: 33px;
  }
`;

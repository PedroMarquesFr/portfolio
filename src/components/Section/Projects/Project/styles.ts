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
`;

import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  background: ${(props) => props.theme.colors.frontItems};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 17vw;
  @media only screen and (max-width: 800px) {
    & {
      padding: 0 5vw;
      height: 100px;
    }
  }
`;

export const Switcher = styled.div`
  display: flex;
  align-items: center;
`;

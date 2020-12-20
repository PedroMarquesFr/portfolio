import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  @media only screen and (max-width: 1200px) {
    & {
      width: unset;
    }
  }
  height: 80vh;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

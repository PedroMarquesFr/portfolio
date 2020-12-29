import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  @media only screen and (max-width: 1200px) {
    & {
      width: unset;
      display:flex;
      flex-wrap:wrap;
      overflow-y: scroll;
    }
  }
  height: 80vh;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

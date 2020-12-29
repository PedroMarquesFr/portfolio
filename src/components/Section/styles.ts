import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items:center; */
  padding: 0 17vw;
  margin-top: 30px;
  @media only screen and (max-width: 1200px) {
    & {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 800px) {
    & {
      padding: 0 5vw;
    }
  }
`;

export const Info = styled.span`
  color: red;
`;

export const Projects = styled.h1``;

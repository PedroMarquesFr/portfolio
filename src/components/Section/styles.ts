import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 17vw;
  margin-top: 30px;
  @media only screen and (max-width: 1200px) {
    & {
      flex-direction:column;
    }
  }
`;

export const Info = styled.p`
  color: red;
`;

export const Projects = styled.h1``;

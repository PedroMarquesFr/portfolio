import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 32vw;
  margin-top:22px;
  @media only screen and (max-width: 1200px) {
    & {
      padding: 0 8vw;
    }
  }
  @media only screen and (max-width: 800px) {
    & {
      padding: 0 3vw;
    }}
`;

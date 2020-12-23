import styled from "styled-components";
export const Container = styled.div`
  width: 45%;

  @media only screen and (max-width: 1200px) {
    width: unset;
    padding-bottom: 60px;
  }
`;
export const Resume = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  padding: 5px 0 28px 0;
  color: ${(props) => props.theme.colors.primary};
`;
export const ProfileImg = styled.img`
  background-image: ${(props) => props.src};
  width: 152px;
  height: 152px;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.colors.frontItems};
`;

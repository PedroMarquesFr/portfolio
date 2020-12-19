import styled from "styled-components";
export const Container = styled.div``;
export const Resume = styled.p`
  font-size: 18px;
  line-height:1.5;
`;
export const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  padding: 28px 0;
`;
export const ProfileImg = styled.img`
  background-image: ${(props) => props.src};
  width: 146px;
  height: 146px;
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.colors.frontItems};
`;

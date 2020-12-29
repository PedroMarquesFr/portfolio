import styled from "styled-components";
import { Link } from "react-router-dom";

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
    box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.2);
    padding: 38px 22px 38px 38px;
  }
`;

export const InstutitionName = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 30px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.frontItems};
  border-radius: 24px;
  width: 98%;
  p {
    opacity: 0.8;
    font-size: 18px;
    line-height: 1.5;
  }
  h1 {
    font-size: 24px;
  }
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 0px 3px rgba(50, 50, 50, 0.1);
    padding: 38px 22px 38px 38px;
    & ~ h1 {
      font-size: 30px;
    }
  }
`;

export const InstutitionName = styled.span`
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

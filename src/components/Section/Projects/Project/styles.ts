import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 30px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.frontItems};
  border-radius: 24px;
  /* border:1px solid #F4F4F4; */
  width: 97%;
  p {
    opacity: 0.8;
    font-size: 18px;
    line-height: 1.5;
  }
  h1 {
    font-size: 24px;
    font-weight: 600;
  }
  transition: 0.5s transform;
  &:hover {
    transform: translate(0, -5px);
    border: 2px solid ${(props) => props.theme.colors.primary};

    /* -webkit-box-shadow: 0px 0px 7px 0px rgba(50, 50, 50, 0.07);
    -moz-box-shadow: 0px 0px 7px 0px rgba(50, 50, 50, 0.07);
    box-shadow: 0px 0px 7px 0px rgba(50, 50, 50, 0.07); */
  }
`;

export const InstutitionName = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
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

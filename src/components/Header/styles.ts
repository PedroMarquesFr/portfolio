import styled from "styled-components";
import { BiSun, BiMoon } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";


export const Container = styled.div`
  height: 80px;
  background: ${(props) => props.theme.colors.frontItems};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 17vw;
  @media only screen and (max-width: 800px) {
    & {
      padding: 0 5vw;
      height: 100px;
    }
  }
`;

export const RoutesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Switcher = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 56px;
`;

export const Sun = styled(BiSun)`
  fill: ${(props) => props.theme.colors.background};
  margin-top: 2px;
  margin-left: 3px;
`;

export const Moon = styled(BiMoon)`
  fill: ${(props) => props.theme.colors.background};
  margin-top: 2px;
  margin-left: 3px;
`;

export const IconLink = styled(Link)`
  text-decoration: none;
  color: unset;
  transition: 0.5s;
  &:hover {
    color: ${(props) => props.theme.colors.textsec};
    padding:0 5px;
  }

`;

export const GitHubIcon = styled(AiOutlineGithub)`
  height: 42px;
  width: 42px;
`;

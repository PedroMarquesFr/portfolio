import styled from "styled-components";
import { BiSun, BiMoon } from "react-icons/bi";

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
  display:flex;
  > p{
    margin-right:30px;
    padding:6px 10px;
    font-size:21px; 
    transition:.5s;
    font-weight:500;
    &:hover{
      background-color:${props=>props.theme.colors.primary};
      border-radius:12px;
      color:${props=>props.theme.colors.frontItems};
    }
  }
`;


export const Switcher = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 56px;
`;

export const Sun = styled(BiSun)`
  fill: ${props=>props.theme.colors.background};
  margin-top:2px;
`;

export const Moon = styled(BiMoon)`
  fill: ${props=>props.theme.colors.background};
  margin-top:2px;
  margin-left:3px;
`;


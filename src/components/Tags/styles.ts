import styled from "styled-components";

export const DefaultTag = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 0 6px;
  margin: 4px;
  border-radius: 6px;
  background-color: #222531;
  &::before {
    content: "DEFLT";
  }
  color: white;
  font-weight: 600;
  opacity: 0.85;
`;

export const ReactTag = styled(DefaultTag)`
  background-color: ${(props) => props.theme.colors.react};
  &::before {
    content: "React";
  }
  color: ${(props) => props.theme.colors.textsec}; /* 31322F*/
`;
export const CSSTag = styled(DefaultTag)`
  background-color: ${(props) => props.theme.colors.css};
  &::before {
    content: "CSS";
  }
  color: ${(props) => props.theme.colors.textsec};
`;
export const HTMLTag = styled(DefaultTag)`
  background-color: ${(props) => props.theme.colors.html};
  &::before {
    content: "HTML";
  }
  color: ${(props) => props.theme.colors.textsec};
`;
export const JSTag = styled(DefaultTag)`
  background-color: ${(props) => props.theme.colors.js};
  &::before {
    content: "JavaScript";
  }
  color: ${(props) => props.theme.colors.textsec};
`;
export const StyledCompTag = styled(DefaultTag)`
  background-color: ${(props) => props.theme.colors.sc};
  &::before {
    content: "StyledComp";
  }
  color: ${(props) => props.theme.colors.textsec};
`;

interface Colors {
  primary: string;
  secundary: string;

  background: string;
  frontItems: string;
  text: string;
  textsec: string;

  react: string;
  css: string;
  html: string;
  js: string;
  sc: string;
}

const selector = (tag: string, colors: Colors): string => {
  switch (tag) {
    case "js":
      return colors.js;
    case "css":
      return colors.css;
    case "html":
      return colors.html;
    case "react":
      return colors.react;
    case "sc":
      return colors.sc;

    default:
      return "false";
  }
};

interface Props {
  tag: string;
}
export const DefaultDot = styled.div<Props>`
  height: 7px;
  width: 7px;
  margin: 0 0 0 7px;
  background-color: ${(props) => selector(props.tag, props.theme.colors)};
  border-radius: 50%;
`;

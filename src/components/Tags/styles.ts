import styled from "styled-components";

export const DefaultTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 0 9px;
  margin: 4px;
  border-radius: 6px;
  background-color: #222531;
  cursor: pointer;

  transition: 0.2s;
  &::before {
    content: "DEFLT";
  }
  &:hover {
    opacity: unset;
  }
  color: white;

  font-weight: 600;
  font-size: 22px;
  opacity: 0.85;
`;

export const AllTag = styled(DefaultTag)`
  background-color: ${(props) => props.theme.colors.frontItems};
  &::before {
    content: "All";
  }
  color: ${(props) => props.theme.colors.textsec};
`;

export const ReactTag = styled(DefaultTag)`
  background-color: ${(props) => props.theme.colors.react};
  &::before {
    content: "React";
  }
  color: ${(props) => props.theme.colors.textsec};
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
export const TSTag = styled(DefaultTag)`
  background-color: ${(props) => props.theme.colors.ts};
  &::before {
    content: "TypeScript";
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
export const ReduxTag = styled(DefaultTag)`
  background-color: ${(props) => props.theme.colors.redux};
  &::before {
    content: "Redux";
  }
  color: ${(props) => props.theme.colors.textsec};
`;
export const NodeTag = styled(DefaultTag)`
  background-color: ${(props) => props.theme.colors.node};
  &::before {
    content: "Nodejs";
  }
  color: ${(props) => props.theme.colors.textsec};
`;

export const NextTag = styled(DefaultTag)`
  background-color: ${(props) => props.theme.colors.next};
  &::before {
    content: "Nextjs";
  }
  color: ${(props) => props.theme.colors.textsec};
`;

interface Colors {
  primary: string;

  background: string;
  frontItems: string;
  text: string;
  textsec: string;

  react: string;
  css: string;
  html: string;
  js: string;
  ts: string;
  sc: string;
  redux: string;
  node: string;
  next: string;
}

const selector = (tag: string, colors: Colors): string => {
  switch (tag) {
    case "js":
      return colors.js;
    case "ts":
      return colors.ts;
    case "css":
      return colors.css;
    case "html":
      return colors.html;
    case "react":
      return colors.react;
    case "sc":
      return colors.sc;
    case "redux":
      return colors.redux;
    case "node":
      return colors.node;
    case "next":
      return colors.next;
    default:
      return "false";
  }
};

interface Props {
  tag: string;
}
export const DefaultDot = styled.div<Props>`
  height: 9px;
  width: 9px;
  margin: 0 0 0 7px;
  background-color: ${(props) => selector(props.tag, props.theme.colors)};
  border-radius: 50%;
`;

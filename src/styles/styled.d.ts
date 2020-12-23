import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      frontItems: string,
      text: string;
    };
    toggleTheme:()=>void;
  }
}

// arquivo de definição de tipo / definição de tipo global

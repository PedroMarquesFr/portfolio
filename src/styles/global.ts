import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Montserrat', sans-serif;
  }
  body{
    background:${(props) => props.theme.colors.background};
    font-size:14px;  
    color:${(props) => props.theme.colors.text};
  }
`;

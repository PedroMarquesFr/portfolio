import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyles from "./styles/global";
import Routes from "./routes";


function App() {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };
  return (
    <ThemeProvider theme={{...theme, toggleTheme}}>
        <GlobalStyles />
        <Routes/>
    </ThemeProvider>
  );
}

export default App;

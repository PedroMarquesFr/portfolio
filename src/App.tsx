import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Header from "./components/Header";
import GlobalStyles from "./styles/global";
import Section from "./components/Section";
import Ornament from "./components/Ornament";

function App() {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Section/>
        <Ornament />
      </div>
    </ThemeProvider>
  );
}

export default App;

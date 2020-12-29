import React, { useState } from "react";

import { Provider } from "react-redux";
import store from "./store";

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
    <Provider store={store}>
      <ThemeProvider theme={{ ...theme, toggleTheme }}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

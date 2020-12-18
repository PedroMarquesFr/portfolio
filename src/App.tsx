import { ThemeProvider } from "styled-components";
import light from './styles/themes/light';

import Header from "./components/Header";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyles />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;

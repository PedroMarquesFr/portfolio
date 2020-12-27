import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";

import { Container, Switcher, Sun, Moon, IconLink, GitHubIcon } from "./styles";

// interface Props {
//   toggleTheme(): void;
// }

const Header: React.FC = () => {
  const [swift, setSwift] = useState<boolean>(true);
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Container>
      <IconLink
        to={{ pathname: "https://github.com/PedroMarquesFr" }}
        target="_blank"
      >
        <GitHubIcon />
      </IconLink>
      <h4>{"<PedroMFr/>"}</h4>
      <Switcher>
        <Switch
          onChange={() => {
            toggleTheme();
            setSwift(!swift);
          }}
          offColor="#DFDDF4"
          onColor="#56546D"
          checked={swift}
          offHandleColor="#56546D"
          onHandleColor="#DFDDF4"
          checkedIcon={<Moon />}
          uncheckedIcon={<Sun />}
        />
      </Switcher>
    </Container>
  );
};

export default Header;

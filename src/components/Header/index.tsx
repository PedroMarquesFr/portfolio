import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";

import {
  Container,
  Switcher,
  Sun,
  Moon,
  IconLink,
  GitHubIcon,
  RoutesContainer,
} from "./styles";

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
      <RoutesContainer>
        <IconLink to="/">Home</IconLink>
        <IconLink to="/about">About</IconLink>
        <IconLink to="/contact">Contact</IconLink>
      </RoutesContainer>
      <Switcher>
        <Switch
          onChange={() => {
            toggleTheme();
            setSwift(!swift);
          }}
          offColor="#B5B3CD"
          onColor="#56546D"
          checked={swift}
          offHandleColor="#56546D"
          onHandleColor="#B5B3CD"
          checkedIcon={<Moon />}
          uncheckedIcon={<Sun />}
        />
      </Switcher>
    </Container>
  );
};

export default Header;

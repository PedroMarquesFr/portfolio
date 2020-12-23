import React, { useState,useContext } from "react";
import { ThemeContext } from 'styled-components';
import Switch from "react-switch";
// import { Link } from "react-router-dom";

import { Container, Switcher, Sun, Moon, RoutesContainer } from "./styles";

// interface Props {
//   toggleTheme(): void;
// }

const Header: React.FC = () => {
  const [swift, setSwift] = useState<boolean>(true);
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <Container>
      <h4>{"<PedroMFr/>"}</h4>

      <Switcher>
        <RoutesContainer>
          <p>About</p>
          <p>Projects</p>
          <p>About</p>
        </RoutesContainer>
        <Switch
          onChange={() => {
            toggleTheme();
            setSwift(!swift);
          }}
          offColor="#DFDDF4"
          onColor="#0E0D34"
          checked={swift}
          offHandleColor="#0E0D34"
          onHandleColor="#DFDDF4"
          checkedIcon={<Moon />}
          uncheckedIcon={<Sun />}
        />
      </Switcher>
    </Container>
  );
};

export default Header;

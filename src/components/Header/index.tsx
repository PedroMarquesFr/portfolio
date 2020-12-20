import React, { useState } from "react";
import Switch from "react-switch";

import { Container, Switcher } from "./styles";
import { BiSun, BiMoon } from "react-icons/bi";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const [swift, setSwift] = useState<boolean>(true);
  return (
    <Container>
      Hello World
      <Switcher>
        <BiMoon style={{ fill: "#F0EFFF" }} />
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
          checkedIcon={false}
          uncheckedIcon={false}
        />
        <BiSun style={{ fill: "#21204B" }} />
      </Switcher>
    </Container>
  );
};

export default Header;

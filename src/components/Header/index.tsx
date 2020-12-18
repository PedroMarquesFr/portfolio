import React from 'react';
import Switch from "react-switch";

import { Container } from './styles';

const Header: React.FC = () => {
  return <Container>
      Hello World
      <Switch onChange={()=>console.log("lol")} checked={false} />
  </Container>;
}

export default Header;
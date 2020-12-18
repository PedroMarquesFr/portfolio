import React, {useState} from 'react';
import Switch from "react-switch";

import { Container } from './styles';

const Header: React.FC = () => {
  const [swift, setSwift] = useState(0);
  return <Container>
      Hello World
      <Switch onChange={()=>setSwift(!swift)} checked={swift} />
  </Container>;
}

export default Header;
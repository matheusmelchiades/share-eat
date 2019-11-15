import React from 'react';
import { Container, Header, HeaderTitle } from './styles';

import HeaderTitleSVG from '../../assets/header_title.svg';

export default function Layout(props) {
  return (
    <Container id="Layout">
      <Header>
        <HeaderTitle src={HeaderTitleSVG} />
      </Header>
      {props.children}
    </Container>
  );
}

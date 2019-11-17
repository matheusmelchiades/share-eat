import React, { useEffect, useState } from 'react';
import { Container, Header, HeaderTitle, IconBack, ButtonBack } from './styles';

import HeaderTitleSVG from '../../assets/header_title.svg';

import { withRouter } from 'react-router-dom';

const MAP_ACTIONS_BY_PATH = {
  '/shareEat/places': {
    showButtonBack: false,
    background: true,
  },
  '/shareEat/plates': {
    showButtonBack: true,
    background: true,
  },
  '/shareEat/forms/plates': {
    showButtonBack: true,
    background: false,
  },
};

function Layout({ history, location: { pathname = '' }, children }) {
  const [showButtonBack, setShowButtonBack] = useState(false);

  useEffect(() => {
    setShowButtonBack(MAP_ACTIONS_BY_PATH[pathname] ? MAP_ACTIONS_BY_PATH[pathname].showButtonBack : false);
  }, [pathname]);

  function handleButtonBack() {
    if (showButtonBack) {
      history.goBack();
    }
  }

  return (
    <Container
      id="Layout"
      background={MAP_ACTIONS_BY_PATH[pathname] ? MAP_ACTIONS_BY_PATH[pathname].background : false}
    >
      <Header>
        <ButtonBack onClick={handleButtonBack}>{showButtonBack && <IconBack>keyboard_arrow_left</IconBack>}</ButtonBack>
        <HeaderTitle src={HeaderTitleSVG} />
      </Header>
      {children}
    </Container>
  );
}

export default withRouter(Layout);

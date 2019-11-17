import React, { useEffect } from 'react';

import { Container, Animation } from './styles';

export default function SplashScreen({ history }) {
  useEffect(() => {
    setTimeout(() => {
      history.push('/shareEat');
    }, 3500);
  }, []);

  return (
    <Container>
      <Animation />
    </Container>
  );
}

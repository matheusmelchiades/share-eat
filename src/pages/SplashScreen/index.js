import React, { useEffect } from 'react';

import { Container, Animation } from './styles';

export default function SplashScreen({ history }) {
  useEffect(() => {
    setTimeout(() => {
      history.push('/share-eat');
    }, 3500);
  }, []);

  return (
    <Container>
      <Animation />
    </Container>
  );
}

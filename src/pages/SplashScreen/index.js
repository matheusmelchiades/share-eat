import React, { useEffect } from 'react';

import { Container } from './styles';
import Lottie from 'react-lottie';
import animation from '../../animations/splashScreen.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function SplashScreen({ history }) {
  useEffect(() => {
    setTimeout(() => {
      history.push('/shareEat');
    }, 3500);
  }, []);

  return (
    <Container>
      <Lottie options={defaultOptions} height={400} width={400} isStopped={false} isPaused={false} />
    </Container>
  );
}

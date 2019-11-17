import styled from 'styled-components';

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

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Animation = styled(Lottie).attrs({
  options: defaultOptions,
  isStopped: false,
  isPaused: false,
  height: 300,
  width: 300,
})``;

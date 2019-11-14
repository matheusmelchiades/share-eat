import styled from 'styled-components';

import ImageBackgroundSVG from '../../assets/background_style.svg';

const MEDIA_PIXEL = 769;

export const Container = styled.div`
  background-image: url(${ImageBackgroundSVG});
  background-repeat: no-repeat;
  background-position: right top;
  height: 100vh;

  @media (min-width: ${MEDIA_PIXEL}px) {
    margin: 0px 0px;
    background-position: top center;
    background-size: 80%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.img`
  margin: 15px 0px;
`;

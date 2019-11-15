import styled from 'styled-components';

import ImageBackgroundSVG from '../../assets/background_style.svg';

const MEDIA_PIXEL = 769;

export const Container = styled.div`
  background: ${({ background }) => (background ? '#292929' : '#464646')};
  background-image: url(${({ background }) => (background ? ImageBackgroundSVG : '')});
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (min-width: ${MEDIA_PIXEL}px) {
    padding: 0 31%;
  }
`;

export const HeaderTitle = styled.img`
  margin: 15px 0px;
  justify-self: center;
`;

export const ButtonBack = styled.div`
  margin: 15px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${MEDIA_PIXEL}px) {
    margin: 15px 10px;
  }
`;

export const IconBack = styled.i.attrs({
  className: 'material-icons',
})`
  color: #fff;
`;

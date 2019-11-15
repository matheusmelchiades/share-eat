import styled from 'styled-components';

const MEDIA_PIXEL = 769;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
`;

export const PlaceRow = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: ${MEDIA_PIXEL}px) {
    padding: 0 30%;
  }
`;

export const PlaceCard = styled.div`
  background-color: #333333;
  width: 100%;
  margin-top: 10px;
  margin-left: 10px;

  border-radius: 8px;
  box-shadow: 0px 4px 16px #00000029;

  padding: 24px;

  &:active {
    transform: translateY(3px);
  }
`;

export const PlaceTitle = styled.h3`
  text-align: left;
  font-family: Poppins;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0;
  color: #ffffff;
`;

export const PlatesLength = styled.h3`
  text-align: left;
  font-family: Nunito Sans;
  font-weight: lighter;
  font-size: 16px;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 0.7;
`;

export const PlatesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 12px;
`;

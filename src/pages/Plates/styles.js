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

export const PlateRow = styled.div`
  display: flex;
  width: 100%;

  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: ${MEDIA_PIXEL}px) {
    padding: 0 31%;
  }
`;

export const PlateCard = styled.div`
  background-color: #464646;
  width: 100%;
  margin-top: 20px;

  border-radius: 8px;
  border-left: 6px solid #f3aa00;
  box-shadow: 0px 4px 16px #00000029;

  padding: 18px;

  &:active {
    transform: translateY(3px);
  }
`;

export const PlateCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PlateName = styled.h4`
  opacity: 1;
  font-size: 16px;
  color: #ffffff;
  text-align: left;
  font-family: Poppins;
`;

export const PlatePrice = styled.h4`
  opacity: 1;
  font-size: 16px;
  color: #ffffff;
  text-align: left;
  font-family: Poppins;
`;

export const PlateDescription = styled.p`
  margin-top: 15px;
  color: #ffffff;
  opacity: 0.8;
  letter-spacing: 0;
  text-align: left;
  font-weight: lighter;
  font-family: Nunito Sans;
`;

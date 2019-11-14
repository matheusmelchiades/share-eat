import styled from 'styled-components';

const MEDIA_PIXEL = 769;

export const Container = styled.div`
  margin-left: 20px;
  align-self: flex-start;

  @media (min-width: ${MEDIA_PIXEL}px) {
    margin-left: 31%;
  }
`;

export const Title = styled.h2`
  text-align: left;
  font-family: Poppins;
  font-weight: bold;
  font-size: 36px;
  letter-spacing: 0.36px;
  color: #f3aa00;
`;

export const SubTitle = styled.p`
  margin-top: 5px;
  color: #ffffff;
  opacity: 0.7;
  letter-spacing: 0;
  text-align: left;
  font-family: Nunito Sans;
  font-size: 16px;
`;

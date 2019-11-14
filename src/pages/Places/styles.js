import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: left;
  font: Bold 36px/40px Poppins;
  letter-spacing: 0.36px;
  color: #f3aa00;
  opacity: 1;
  align-self: flex-start;
  margin-left: 20px;
`;

export const SubTitle = styled.p`
  margin-top: 5px;
  align-self: flex-start;
  margin-left: 20px;

  color: #ffffff;
  opacity: 1;
  letter-spacing: 0;
  text-align: left;
  font-family: Nunito Sans;
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
  justify-content: space-between;
  width: 100%;
`;

export const PlaceCard = styled.div`
  background-color: #333333;
  width: 100%;
  margin-top: 10px;
  margin-left: 10px;

  border-radius: 8px;
  box-shadow: 0px 4px 16px #00000029;

  padding: 16px;
`;

export const PlaceTitle = styled.h3`
  text-align: left;
  font: Bold 16px/10px Poppins;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
`;

export const PlatesLength = styled.h3`
  text-align: left;
  font: Light 16px/10px Nunito Sans;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
`;

export const PlatesButton = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

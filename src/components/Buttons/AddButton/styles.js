import styled from 'styled-components';

const MEDIA_PIXEL = 769;

export const Container = styled.button`
  border-radius: 45px;
  border: 2px solid #ffffff98;
  background-color: Transparent;
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;

  @media (min-width: ${MEDIA_PIXEL}px) {
    width: 46px;
    height: 46px;
  }

  &:active {
    transform: translateY(3px);
  }
`;

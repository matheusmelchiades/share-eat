import styled from 'styled-components';

const MEDIA_PIXEL = 769;

export const Container = styled.div`
  position: fixed;

  width: 64px;
  height: 64px;

  bottom: 20px;
  right: 20px;

  background-color: #f3aa00;
  box-shadow: 0px 8px 24px #0000003d;

  color: #464646;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  border-radius: 65px;

  @media (min-width: ${MEDIA_PIXEL}px) {
    position: absolute;

    border-radius: 5px;
    width: 50px;
    height: 36px;

    top: 12vh;
    left: calc(100% - 33.8%);
    right: calc(100% - 66%)

    &:active {
      transform: translateY(3px);
    }
  }
`;

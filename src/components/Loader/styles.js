import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  border-width: 4px;
  border-style: solid;
  border-image: initial;
  border-radius: 50%;
  animation: spin 1.2s linear infinite normal none running;
  border-color: rgb(223, 181, 54) transparent transparent;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

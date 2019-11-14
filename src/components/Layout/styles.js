import styled from 'styled-components';

import ImageBackgroundSVG from '../../assets/background_style.svg';

export const Container = styled.div`
  background-image: url(${ImageBackgroundSVG});
  background-repeat: no-repeat;
  background-position: right top;
  height: 100vh;
`;

export const Header = styled.div.attrs({})`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.img.attrs({})`
  margin: 15px 0px;
`;

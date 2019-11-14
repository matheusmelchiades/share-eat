import React from 'react';
import { Container, SubTitle, Title } from './styles';

export default function Header({ title = '', subTitle = '' }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
}

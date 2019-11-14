import React from 'react';

import { Container } from './styles';
import AddIcon from '../../Icons/Plus';

export default function AddButton({ style, onClick }) {
  return (
    <Container style={style} onClick={onClick}>
      <AddIcon />
    </Container>
  );
}

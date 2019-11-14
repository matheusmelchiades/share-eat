import React from 'react';

import { Container } from './styles';
import AddIcon from '../../Icons/Plus';

export default function AddFloating({ styles, onClick }) {
  return (
    <Container styles={styles} onClick={onClick}>
      <AddIcon styles="{fill: #464646}" />
    </Container>
  );
}

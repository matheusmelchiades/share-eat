import React from 'react';

import { Container } from './styles';

export default function Loader({ loading, style }) {
  return loading && <Container style={style} />;
}

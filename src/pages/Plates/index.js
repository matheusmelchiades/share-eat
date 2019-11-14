import React, { useState, useEffect } from 'react';

import data from './data.json';
import { Container, Header, PlateRow, PlateCard, PlateName, PlatePrice, PlateDescription } from './styles.js';
import { Title, SubTitle } from '../Places/styles.js';

import FloatingButton from '../../components/Buttons/AddFloating';

export default function Plates({ history, location }) {
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    const placeParam = location.state;

    if (placeParam && placeParam.id) {
      const platesFetched = data.filter(plate => plate.placeId === placeParam.id);

      setPlates(platesFetched);
    } else {
      history.push('places');
    }
  }, []);

  return (
    <Container>
      <Header>
        <Title>{location.state.name || ''}</Title>
        <SubTitle>{plates.length || ''} pratos</SubTitle>
      </Header>
      {plates.map(plate => (
        <PlateRow key={plate.id}>
          <PlateCard>
            <PlateName>{plate.name}</PlateName>
            <PlatePrice>R$ {plate.price}</PlatePrice>
          </PlateCard>
          <PlateDescription>{plate.description}</PlateDescription>
        </PlateRow>
      ))}
      <FloatingButton
        onClick={() => {
          history.push('forms/plate');
        }}
      />
    </Container>
  );
}

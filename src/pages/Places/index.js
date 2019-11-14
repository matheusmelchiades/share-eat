import React, { useState } from 'react';

import {
  Container,
  Title,
  SubTitle,
  Content,
  PlaceRow,
  PlaceTitle,
  PlatesLength,
  PlaceCard,
  PlatesButton,
} from './styles';

import data from './data.json';
import AddButton from '../../components/Buttons/AddButton';

export default function Places({ history }) {
  const [placesLength] = useState(data.count);
  const [places] = useState(data.rows);

  const handlerSelectPlace = place => {
    history.push('/plates', place);
  };

  return (
    <Container>
      <Title>Lugares</Title>
      <SubTitle>{placesLength} lugares cadastrados</SubTitle>

      <Content>
        {places.map(place => (
          <PlaceRow key={place.id}>
            <PlaceCard onClick={() => handlerSelectPlace(place)}>
              <PlaceTitle>{place.name}</PlaceTitle>
              <PlatesLength>{place.plates} pratos</PlatesLength>
            </PlaceCard>

            <PlatesButton>
              <AddButton />
            </PlatesButton>
          </PlaceRow>
        ))}
      </Content>
    </Container>
  );
}

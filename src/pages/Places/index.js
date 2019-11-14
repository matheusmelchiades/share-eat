import React, { useState } from 'react';

import { Container, Content, PlaceRow, PlaceTitle, PlatesLength, PlaceCard, PlatesButton } from './styles';

import Header from '../../components/Header';
import AddButton from '../../components/Buttons/AddButton';
import data from './data.json';

export default function Places({ history }) {
  const [placesLength] = useState(data.count);
  const [places] = useState(data.rows);

  const handlerSelectPlace = place => {
    history.push('/plates', place);
  };

  return (
    <Container>
      <Header title="Lugares" subTitle={`${placesLength} lugares cadastrados`} />

      <Content>
        {places.map(place => (
          <PlaceRow key={place.id}>
            <PlaceCard onClick={() => handlerSelectPlace(place)}>
              <PlaceTitle>{place.name}</PlaceTitle>
              <PlatesLength>{place.plates} pratos</PlatesLength>
            </PlaceCard>

            <PlatesButton>
              <AddButton icon={{ style: { fill: '#FFFFFF98' } }} />
            </PlatesButton>
          </PlaceRow>
        ))}
      </Content>
    </Container>
  );
}

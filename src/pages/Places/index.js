import React, { useState, useEffect } from 'react';

import { Container, Content, PlaceRow, PlaceTitle, PlatesLength, PlaceCard, PlatesButton } from './styles';

import Header from '../../components/Header';
import AddButton from '../../components/Buttons/AddButton';
import api from '../../services/api';

export default function Places({ history }) {
  const [placesLength, setPlacesLength] = useState(0);
  const [places, setPlaces] = useState([]);

  async function fetchPlaces() {
    try {
      const { data } = await api.get('/place', {
        params: {
          page: 1,
          limit: 10,
          projection: 'listPlaces',
        },
      });

      if (data) {
        setPlaces(data.rows);
        setPlacesLength(data.count);
      }
    } catch (err) {}
  }

  useEffect(() => {
    fetchPlaces();
  }, []);

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
              <AddButton
                icon={{ style: { fill: '#FFFFFF98' } }}
                onClick={() => {
                  history.push('forms/plates', place);
                }}
              />
            </PlatesButton>
          </PlaceRow>
        ))}
      </Content>
    </Container>
  );
}

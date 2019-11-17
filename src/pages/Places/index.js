import React, { useState, useEffect } from 'react';

import { Container, Content, PlaceRow, PlaceTitle, PlatesLength, PlaceCard, PlatesButton } from './styles';

import Header from '../../components/Header';
import AddButton from '../../components/Buttons/AddButton';
import api from '../../services/api';
import Loader from '../../components/Loader';

export default function Places({ history }) {
  const [placesLength, setPlacesLength] = useState(0);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      }
    } catch (err) {}
  }

  useEffect(() => {
    setTimeout(() => {
      fetchPlaces();
    }, 1200);
  }, []);

  const handlerSelectPlace = place => {
    history.push('/shareEat/plates', place);
  };

  return (
    <Container>
      <Header title="Lugares" subTitle={`${placesLength} lugares cadastrados`} />
      <Content>
        <Loader loading={loading} style={{ marginTop: '10%' }} />

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
                  history.push('/shareEat/forms/plates', place);
                }}
              />
            </PlatesButton>
          </PlaceRow>
        ))}
      </Content>
    </Container>
  );
}

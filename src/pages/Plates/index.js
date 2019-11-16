import React, { useState, useEffect } from 'react';

import {
  Container,
  Content,
  PlateRow,
  PlateCard,
  PlateName,
  PlatePrice,
  PlateDescription,
  PlateCardHeader,
  HeaderRow,
} from './styles.js';

import Header from '../../components/Header';
import FloatingButton from '../../components/Buttons/AddFloating';
import api from '../../services/api.js';

export default function Plates({ history, location }) {
  const [plates, setPlates] = useState([]);

  async function fetchPlates(placeId) {
    try {
      const { data } = await api.get(`/place/${placeId}/plate`);

      if (data) {
        setPlates(data.rows);
      }
    } catch (err) {}
  }

  useEffect(() => {
    history.buttonBack = true;
    const placeParam = location.state;

    if (placeParam && placeParam.id) {
      fetchPlates(placeParam.id);
    } else {
      history.push('places');
    }
  }, []);

  return (
    <Container>
      <Header
        title={location.state && location.state.name ? location.state.name : ''}
        subTitle={`${plates.length || 0} pratos`}
      />
      <Content>
        {plates.map(plate => (
          <PlateRow key={plate.id}>
            <PlateCard>
              <PlateCardHeader>
                <PlateName>{plate.name}</PlateName>
                <PlatePrice>R$ {plate.price}</PlatePrice>
              </PlateCardHeader>
              <PlateDescription>{plate.description}</PlateDescription>
            </PlateCard>
          </PlateRow>
        ))}
      </Content>

      <FloatingButton
        onClick={() => {
          history.push('forms/plates', location.state);
        }}
      />
    </Container>
  );
}

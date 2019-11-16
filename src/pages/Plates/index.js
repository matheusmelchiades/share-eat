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
} from './styles.js';

import Header from '../../components/Header';
import FloatingButton from '../../components/Buttons/AddFloating';
import api from '../../services/api.js';
import Loader from '../../components/Loader/index.js';

export default function Plates({ history, location }) {
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPlates(placeId) {
    try {
      const { data } = await api.get(`/place/${placeId}/plate`);

      if (data) {
        setPlates(data.rows);
        setLoading(false);
      }
    } catch (err) {}
  }

  useEffect(() => {
    history.buttonBack = true;
    const placeParam = location.state;

    if (placeParam && placeParam.id) {
      setTimeout(() => {
        fetchPlates(placeParam.id);
      }, 1200);
    } else {
      history.push('places');
    }
  }, []);

  const formatPrice = value => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <Container>
      <Header
        title={location.state && location.state.name ? location.state.name : ''}
        subTitle={`${plates.length || 0} pratos`}
      />
      <Content>
        <Loader loading={loading} style={{ 'margin-top': '10%' }} />

        {plates.map(plate => (
          <PlateRow key={plate.id}>
            <PlateCard>
              <PlateCardHeader>
                <PlateName>{plate.name}</PlateName>
                <PlatePrice>R$ {formatPrice(plate.price)}</PlatePrice>
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

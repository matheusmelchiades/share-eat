import React, { useState } from 'react';

import { Container, FormGroup, FormItem, TitleInput, Input, Description, FormSubmit, TextArea } from './styles';

import Header from '../../components/Header';
import api from '../../services/api';
import * as Notification from '../../components/Notification';

export default function FormPlate({ history, location: { state = {} } }) {
  const [title] = useState(state.name || '');
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleSetForm = (value, field) => {
    setForm({ ...form, [field]: value });
  };

  async function fetchNewPlate() {
    try {
      const response = await api.post('plate', { ...form, price: form.price, placeId: state.id });

      if (response.data.id) {
        Notification.success({
          title: `Plate ${response.data.id}`,
          message: `${form.name} created with sucess!!!`,
        });

        history.push('/places');
      }
    } catch (err) {}
  }

  const handlerSubmit = async e => {
    e.preventDefault();

    await fetchNewPlate();
  };

  return (
    <Container>
      <Header title={title} />
      <FormGroup onSubmit={handlerSubmit}>
        <FormItem>
          <TitleInput>Nome do prato</TitleInput>
          <Input
            type="text"
            placeholder="Prato"
            required="required"
            value={form.name}
            onChange={e => handleSetForm(e.target.value, 'name')}
          />
        </FormItem>
        <FormItem>
          <TitleInput>Valor</TitleInput>
          <Input
            type="number"
            placeholder="R$ 0,00"
            value={form.price}
            onChange={e => handleSetForm(e.target.value, 'price')}
            required="required"
          />
        </FormItem>
        <FormItem>
          <TitleInput>Descrição do prato</TitleInput>
          <TextArea
            placeholder="Insira uma descrição"
            cols="40"
            rows="5"
            maxLength="200"
            required="required"
            value={form.description}
            onChange={e => handleSetForm(e.target.value, 'description')}
          />
          <Description>*A descrição deve conter até 200 caracteres.</Description>
        </FormItem>
        <FormSubmit type="submit">Salvar</FormSubmit>
      </FormGroup>
    </Container>
  );
}

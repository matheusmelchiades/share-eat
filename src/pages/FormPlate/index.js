import React, { useState } from 'react';

import { Container, FormGroup, FormItem, TitleInput, Input, Description, FormSubmit, TextArea } from './styles';

import Header from '../../components/Header';

export default function FormPlate({ history }) {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleSetForm = (value, field) => {
    setForm({ ...form, [field]: value });
  };

  const handlerSubmit = e => {
    e.preventDefault();
    console.log(form);
    history.push('/places');
  };

  return (
    <Container>
      <Header title="SilvaLanches" />
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
            min="0.00"
            step="any"
            required="required"
            value={form.price}
            onChange={e => handleSetForm(e.target.value, 'price')}
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

import styled from 'styled-components';

import * as Layout from '../../components/Layout/styles';

export const Container = styled.div`
  body:not(&) {
    background: #464646;
  }

  ${Layout.Container}:not(&) {
    background-image: none;
  }
`;

export const Header = styled.div``;

export const Title = styled.h2``;

export const FormGroup = styled.form``;

export const FormItem = styled.div``;

export const TitleInput = styled.h4`
  text-align: left;
  font: Bold 14px/19px Nunito Sans;
  letter-spacing: 0;
  color: #ffffffde;
  opacity: 1;
`;

export const Input = styled.input`
  border: 1px solid #dededf;
  border-radius: 4px;
  background: #ffffff 0% 0% no-repeat padding-box;

  input[type='number']::-webkit-inner-spin-button:not(&),
  input[type='number']::-webkit-outer-spin-button:not(&) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export const Description = styled.p`
  text-align: left;
  font: Regular 14px/19px Nunito Sans;
  letter-spacing: 0;
  color: #ffffffde;
  opacity: 1;
`;

export const TextArea = styled.textarea`
  border: 1px solid #dededf;
  border-radius: 4px;
  background: #ffffff 0% 0% no-repeat padding-box;
  resize: none;
`;

export const FormSubmit = styled.button`
  width: 100%;
  font: Bold 16px/25px Poppins;
  letter-spacing: 0;
  color: #121212;
  opacity: 1;

  background: #f3aa00 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  border: none;
`;

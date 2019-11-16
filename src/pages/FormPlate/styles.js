import styled from 'styled-components';

const MEDIA_PIXEL = 769;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
`;

export const FormGroup = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 10px;

  @media (min-width: ${MEDIA_PIXEL}px) {
    padding: 0 31%;
  }
`;

export const FormItem = styled.div`
  margin-top: 20px;
  padding-right: 10px;
  width: 100%;
`;

export const TitleInput = styled.h4`
  text-align: left;
  font-size: 14px;
  font-family: Nunito Sans;
  font-weight: bold;
  color: #ffffffde;
  opacity: 1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #dededf;
  border-radius: 4px;
  background: #ffffff 0% 0% no-repeat padding-box;

  min-height: 38px;

  &[type='number'] {
    width: 20%;
  }
`;

export const Description = styled.p`
  text-align: left;
  font-family: Nunito Sans;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0;
  color: #ffffffde;
  opacity: 1;
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #dededf;
  border-radius: 4px;
  background: #ffffff 0% 0% no-repeat padding-box;
  resize: none;
`;

export const FormSubmit = styled.button`
  margin-top: 15%;
  padding: 10px;
  width: 100%;
  font-family: Poppins;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  color: #121212;
  opacity: 1;

  background: #f3aa00 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  border: none;

  &:active {
    transform: translateY(3px);
  }
`;

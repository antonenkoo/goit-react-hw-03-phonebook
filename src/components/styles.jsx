import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

//////////  ContactForm.jsx  /////////////

export const Div = styled.div`
  border: 1px solid black;
  padding: 15px;
  width: 300px;
`;

export const InputStyled = styled(Field)`
  margin: 5px 0px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ButtonStyled = styled.button`
  margin-top: 20px;
  margin-left: 10px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: #ffffff;
  border-radius: 4px;
  background-color: #ff0000;
  padding: 4px;
`;

//////////  ContactList.jsx  ////////////////

export const ListStyled = styled.ul`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

///////////  Filter.jsx  ////////////

export const LiStyled = styled.li``;

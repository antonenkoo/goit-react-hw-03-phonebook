import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Div,
  FormStyled,
  LabelStyled,
  InputStyled,
  ErrorMessageStyled,
  ButtonStyled,
} from '../styles.jsx';

const initialValues = {
  name: '',
  number: '',
};
const scheme = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
  number: yup
    .string()
    .required('This field is Required')
    .min(6, 'Too Short!')
    .max(13, 'Too Long!')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    ),
});

export const ContactForm = props => {
  const handleSubmit = (values, { resetForm }) => {
    props.onSubmit(values);
    resetForm();
  };

  const handleChange = () => {};

  return (
    <Formik
      validationSchema={scheme}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <Div>
        <FormStyled autoComplete="off">
          <LabelStyled htmlFor="name">
            Name
            <InputStyled type="input" name="name" />
            <ErrorMessageStyled name="name" component="div" />
          </LabelStyled>
          <LabelStyled htmlFor="number">
            Phone number
            <InputStyled type="tel" name="number" />
            <ErrorMessageStyled name="number" component="div" />
          </LabelStyled>
          <ButtonStyled type="submit">Add contact</ButtonStyled>
        </FormStyled>
      </Div>
    </Formik>
  );
};

import React from 'react';
import { Formik } from 'formik';
import { FormStyled, LabelStyled, InputStyled } from '../styles.jsx';

export const Filter = props => {
  return (
    <Formik>
      <FormStyled autoComplete="off">
        <LabelStyled htmlFor="filter">
          Filter
          <InputStyled
            type="input"
            name="filter"
            onChange={props.onChange}
            value={props.value}
          />
        </LabelStyled>
      </FormStyled>
    </Formik>
  );
};

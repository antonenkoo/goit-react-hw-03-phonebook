import React from 'react';
import { Formik, FieldArray } from 'formik';
import { ListStyled, ButtonStyled } from 'components/styles';

export const ContactList = props => {
  const { contacts } = props;

  return (
    <Formik>
      <ListStyled>
        <FieldArray
          name="friends"
          render={() => (
            <div>
              {contacts.map((contact, index) => (
                <div key={index}>
                  <li key={contact.name + contact.number}>
                    {contact.name}: {contact.number}
                    <ButtonStyled
                      type="button"
                      onClick={() => {
                        props.onDeleteClick(contact.id)
                      }}
                    >
                      Delete
                    </ButtonStyled>
                  </li>
                </div>
              ))}
            </div>
          )}
        />
      </ListStyled>
    </Formik>
  );
};

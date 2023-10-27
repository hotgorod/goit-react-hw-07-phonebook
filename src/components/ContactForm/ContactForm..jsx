import { useState } from 'react';
import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';

export const ContactForm = ({ addContactCallback }) => {
 const dispatch = useDispatch();
//  const items = useSelector(selectItems);
//  const isLoading = useSelector(selectItemsIsloading);
//  const error = useSelector(selectItemsError);

  // const handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   if (name === 'name') {
  //     setContactName(value);
  //   } else if (name === 'number') {
  //     setContactNumber(value);
  //   }
  // };

  const handleAddContact = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const phone = event.currentTarget.elements.number.value;

    const newContact = {
      name,
      phone,
    }
    dispatch(addContact(newContact));
    console.log(newContact);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleAddContact} className={css.contactForm}>
      <label>
        Name
        <input
          className={css.inputText}
          type="text"
          name="name"
         required
        />
      </label>
      <label>
        Number
        <input
          className={css.inputText}
          type="tel"
          name="number"
                 required
        />
      </label>
      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};


export default ContactForm;

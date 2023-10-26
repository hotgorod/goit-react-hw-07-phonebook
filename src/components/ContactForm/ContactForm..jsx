import { useState } from 'react';
import React from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContactCallback }) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setContactName(value);
    } else if (name === 'number') {
      setContactNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    addContactCallback(contactName, contactNumber);

    setContactNumber('');
    setContactName('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label>
        Name
        <input
          className={css.inputText}
          type="text"
          name="name"
          value={contactName}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          className={css.inputText}
          type="tel"
          name="number"
          value={contactNumber}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};


export default ContactForm;

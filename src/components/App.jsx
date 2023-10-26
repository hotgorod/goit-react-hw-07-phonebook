import React from 'react';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from './ContactForm/ContactForm.';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';



export const App = () => {
  
 
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const addContactToPhonebook = (contactName, contactNumber) => {
    const isDuplicate = contacts.some(
      contact => contact.contactName === contactName
    );

    if (isDuplicate) {
      alert('The contact already exist');
      return; 
    }
    dispatch(addContact({contactName, contactNumber}));
  }
   return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContactCallback={addContactToPhonebook} />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList />
    </div>
  );
};



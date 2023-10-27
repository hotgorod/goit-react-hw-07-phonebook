import React, { Suspense, lazy } from 'react';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from './ContactForm/ContactForm.';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { Route, Routes } from 'react-router-dom';

const ContactsPage = lazy(() => import('./pages/ContactsPage'));

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
    // dispatch(addContact({contactName, contactNumber}));
  }
   return (
     <div className={css.container}>
       <Suspense fallback="Loading...">
         <Routes>
           <Route
             path="/"
             element={
               <>
                 <h1>Phonebook</h1>
                 <ContactForm addContactCallback={addContactToPhonebook} />
                 <h2>Contacts</h2>
                 {/* <ContactsPage /> */}
                 <Filter />
                 <ContactList />
               </>
             }
           />
           {/* <Route
             path="/contacts"
             element={
               <>
                 <h2>Contacts</h2>
                 <ContactsPage />
                 <ContactList />
                 <Filter />
               </>
             }
           /> */}
         </Routes>
       </Suspense>
     </div>
   );
};



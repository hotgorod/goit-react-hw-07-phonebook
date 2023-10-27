import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { deleteContact, fetchContacts } from 'redux/contactSlice';
import { selectItems, selectItemsError, selectItemsIsloading } from 'redux/contacts.selectors';


const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const isLoading = useSelector(selectItemsIsloading);
  const error = useSelector(selectItemsError);
  // const filter = useSelector(state => state.contacts.filter);

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.contactName.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const filteredContacts = getFilteredContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  return (
    <>
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      <ul className={css.list}>
        {contacts !== null &&
          contacts.map(contact => {
            return (
              <li className={css.contactListItem} key={contact.id}>
                <p className={css.contactListItemText}>
                  {contact.name}: {contact.phone}
                </p>
                <button
                  className={css.deleteButton}
                  type="button"
                  // onClick={() => dispatch(deleteContact({ key }))}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
     </>
  );
};

export default ContactList;

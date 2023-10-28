import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { deleteContact, fetchContacts } from 'redux/contactSlice';
import {
  selectItems,
  selectItemsError,
  selectItemsFilter,
  selectItemsIsloading,
} from 'redux/contacts.selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectItemsFilter);

  const items = useSelector(selectItems);
  const isLoading = useSelector(selectItemsIsloading);
  const error = useSelector(selectItemsError);

  const filteredContacts =
    items !== null &&
    items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase().trim()));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

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
        {filteredContacts &&
          filteredContacts.map(item => {
            return (
              <li className={css.contactListItem} key={item.id}>
                <p className={css.contactListItemText}>
                  {item.name}: {item.phone}
                </p>
                <button
                  className={css.deleteButton}
                  type="button"
                  onClick={() => handleDeleteContact(item.id)}
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

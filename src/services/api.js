import axios from 'axios';



const contactsInstance = axios.create({
  baseURL: 'https://653a2c90e3b530c8d9e942e1.mockapi.io/',
});
// ==================== get contacts ========================

export const requestContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

// ==================== post contacts ========================
export const requestAddContact = async newContact => {
  const { data } = await contactsInstance.post('/contacts', newContact);
  return data;
};

// ==================== delete contacts ========================
export const requestDeleteContact = async contactId => {
  const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
  return data;
};

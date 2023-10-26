import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    
    addContact(state, action) {
    state.contacts.push({key: nanoid(),
    contactName: action.payload.contactName,
    contactNumber: action.payload.contactNumber,})
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.key !== action.payload.key)
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } =
  contactSlice.actions;
export default contactSlice.reducer;
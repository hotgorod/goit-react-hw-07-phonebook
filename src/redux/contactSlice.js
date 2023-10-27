import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestContacts } from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestContacts();
      console.log(contacts);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),

  // reducers: {

  //   addContact(state, action) {
  //   state.contacts.push({key: nanoid(),
  //   contactName: action.payload.contactName,
  //   contactNumber: action.payload.contactNumber,})
  //   },

  //   deleteContact(state, action) {
  //     state.contacts = state.contacts.filter(contact => contact.key !== action.payload.key)
  //   },
  //   changeFilter(state, action) {
  //     state.filter = action.payload;
  //   },
  // },
});

export const contactReducer = contactSlice.reducer;

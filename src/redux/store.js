import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import contactReducer from './contactSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
 

const enhancer = devToolsEnhancer();

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts']
};



export const store = configureStore(
  {
    reducer: {
      contacts: persistReducer(contactsPersistConfig, contactReducer),
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  },
  enhancer
);
export const persistor = persistStore(store);
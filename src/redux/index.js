import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth';
import editReducer from './crud/edit'

const store = configureStore({
  reducer: {
    auth: authReducer,
    edit: editReducer
  }
});

export default store;

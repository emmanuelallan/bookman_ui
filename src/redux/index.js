import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth';
import updateBookReducer from './crud/update';
import deleteBookReducer from './crud/delete';
import getBookReducer from './crud/read';
import createBookReducer from './crud/create'

const store = configureStore({
  reducer: {
    auth: authReducer,
    update: updateBookReducer,
    delete: deleteBookReducer,
    get: getBookReducer,
    create: createBookReducer
  }
});

export default store;

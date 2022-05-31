import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth';
import updateBookReducer from './crud/update';
import deleteBookReducer from './crud/delete';
import getBookReducer from './crud/readSingle';
import getAllBooksReducer from './crud/readAll';
import createBookReducer from './crud/create'

const store = configureStore({
  reducer: {
    user: authReducer,
    update: updateBookReducer,
    delete: deleteBookReducer,
    get: getBookReducer,
    create: createBookReducer,
    getAll: getAllBooksReducer
  }
});

export default store;

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authReducer from './auth/auth';

const rootReducer = combineReducers({
  user: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
});

export default store;

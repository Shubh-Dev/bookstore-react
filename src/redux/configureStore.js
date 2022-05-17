import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reducer from './books/books';
import Category from './categories/Categories';

const rootReducer = combineReducers({
  reducer,
  Category,
});

const store = configureStore(rootReducer);

export default store;

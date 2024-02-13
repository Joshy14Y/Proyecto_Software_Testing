// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers' // Adjust the path as needed

const store = configureStore({
  reducer: rootReducer,
  // Other store configurations as needed
});

export default store;
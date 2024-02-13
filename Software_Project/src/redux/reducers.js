// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import { propertyReducer } from './propertySlice'; // Import your individual reducers

const rootReducer = combineReducers({
  property: propertyReducer,
  // Add other reducers as needed
});

export default rootReducer;
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default store;

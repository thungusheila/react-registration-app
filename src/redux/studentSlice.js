// src/redux/studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;

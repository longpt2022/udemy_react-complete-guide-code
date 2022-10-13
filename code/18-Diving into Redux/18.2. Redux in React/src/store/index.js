// npm install @reduxjs/toolkit

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Tạo Redux store
const store = configureStore({
  reducer: counterSlice.reducer,
});

// Phương thức tạo actions
export const counterActions = counterSlice.actions;

export default store;

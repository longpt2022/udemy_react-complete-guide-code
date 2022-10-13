// npm install @reduxjs/toolkit

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// Tạo Redux store
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// Phương thức tạo actions
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

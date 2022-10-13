// npm install @reduxjs/toolkit
// import redux from 'redux';

import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

createSlice({
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
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    // k nên thay đổi state như sau
    // state.counter++''

    // Chỉ nên overwrite (tạo 1 obj mới) lại như sau
    // để tránh gặp lỗi sau này
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  // Trả về nếu không có thay đổi gì
  return state;
};

// Tạo Redux store
const store = createStore(counterReducer);

export default store;

// import redux from 'redux';
import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  // Trả về nếu không có thay đổi gì
  return state;
};

// Tạo Redux store
const store = createStore(counterReducer);

export default store;

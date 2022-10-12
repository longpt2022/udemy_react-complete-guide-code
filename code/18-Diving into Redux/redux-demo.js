// Cài đặt
// npm  init
// npm install redux

//--- 1. Cách import redux
const redux = require('redux');

//--- 3. tạo hàm reducer, với current state
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      // trả về new state
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      // trả về new state
      counter: state.counter - 1,
    };
  }
};

//--- 2. Tạo store
// truyền reducer "counterReducer" chịu trách nhiệm thay đổi store
const store = redux.createStore(counterReducer);

// console.log(store.getState());

//--- 4. Tạo 1 subscribe: action
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log('latestState:', latestState);
};

//--- phương thức subscribe()
// 'counterSubscriber' sẽ hoạt động bất cứ khi nào dữ liệu và store thay đổi
store.subscribe(counterSubscriber);

//--- Gửi đi 1 action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

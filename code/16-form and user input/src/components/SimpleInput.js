import { useState, useRef } from 'react';

const SimpleInput = props => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log('from state:', enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log('from ref:', enteredValue);

    /*
      - Xóa trường input sau khi nhập bằng ref:
      KHÔNG NÊN dùng vì sẽ thao tác trực tiếp vào DOM
      chỉ nên để React thao tác với DOM
    */
    // nameInputRef.current.value = '';

    //--- Xóa trường input sau khi nhập bằng state
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

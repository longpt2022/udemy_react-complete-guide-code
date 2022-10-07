import { useState } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  // Check form is valid
  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  // 3. On "every keystroke"
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  // 2. When a input is "losing focus"
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  // 1. When a form is "submitted"
  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log('from state:', enteredName);

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import React, { useState } from 'react';

function Form2() {
  const [textValue, setTextValue] = useState('');
  const [checkboxValues, setCheckboxValues] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxValues({
      ...checkboxValues,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      textValue,
      checkboxValues,
    };
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text-field">Text Field:</label>
        <input
          type="text"
          id="text-field"
          value={textValue}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <label htmlFor="checkbox-option-1">Option 1:</label>
        <input
          type="checkbox"
          id="checkbox-option-1"
          name="option1"
          checked={checkboxValues.option1}
          onChange={handleCheckboxChange}
        />
      </div>
      <div>
        <label htmlFor="checkbox-option-2">Option 2:</label>
        <input
          type="checkbox"
          id="checkbox-option-2"
          name="option2"
          checked={checkboxValues.option2}
          onChange={handleCheckboxChange}
        />
      </div>
      <div>
        <label htmlFor="checkbox-option-3">Option 3:</label>
        <input
          type="checkbox"
          id="checkbox-option-3"
          name="option3"
          checked={checkboxValues.option3}
          onChange={handleCheckboxChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form2;
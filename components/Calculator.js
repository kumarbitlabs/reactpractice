import React, { useState } from 'react';

const Calculator = () => {
    let res;
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleResultClick = () => {
  res=(eval(input));
  setInput(res);

  };

  const handleClearClick = () => {
    setInput('');
    setResult(res);
  };

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  return (
    <div>
      <center>
        <input type="text" value={input} onChange={handleInputChange} />
        <br />       

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <br />
        <button onClick={() => handleButtonClick('5')}>5</button>        
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <br />
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('0')}>0</button>        
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <br />
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={handleClearClick}>clr</button>
        <button onClick={handleResultClick}>Result</button>
        <br />
      </center>
    </div>
  );
};

export default Calculator;


import React, { useState } from 'react';

function Calculator3() {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (event) => {
    const buttonValue = event.target.innerText;
    if (buttonValue === 'C') {
      setDisplayValue('');
      setResult(null);
      setOperator(null);
    } else if (buttonValue === '=') {
      if (operator === '+') {
        setResult(parseFloat(result) + parseFloat(displayValue));
      } else if (operator === '-') {
        setResult(parseFloat(result) - parseFloat(displayValue));
      } else if (operator === '×') {
        setResult(parseFloat(result) * parseFloat(displayValue));
      } else if (operator === '÷') {
        setResult(parseFloat(result) / parseFloat(displayValue));
      }
      setDisplayValue('');
      setOperator(null);
    } else if (['+', '-', '×', '÷'].includes(buttonValue)) {
      setOperator(buttonValue);
      setResult(parseFloat(displayValue));
      setDisplayValue('');
    } else {
      setDisplayValue(displayValue + buttonValue);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">{result !== null ? result : displayValue}</div>
        <div className="buttons">
          <button onClick={handleButtonClick}>7</button>
          <button onClick={handleButtonClick}>8</button>
          <button onClick={handleButtonClick}>9</button>
          <button onClick={handleButtonClick}>÷</button>
          <button onClick={handleButtonClick}>4</button>
          <button onClick={handleButtonClick}>5</button>
          <button onClick={handleButtonClick}>6</button>
          <button onClick={handleButtonClick}>×</button>
          <button onClick={handleButtonClick}>1</button>
          <button onClick={handleButtonClick}>2</button>
          <button onClick={handleButtonClick}>3</button>
          <button onClick={handleButtonClick}>-</button>
          <button onClick={handleButtonClick}>0</button>
          <button onClick={handleButtonClick}>.</button>
          <button onClick={handleButtonClick}>C</button>
          <button onClick={handleButtonClick}>+</button>
          <button onClick={handleButtonClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator3;

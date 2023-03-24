import React, { useState } from 'react';

const Calculator2 = () => {
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
    <div style={styles.container}>
      <center>
        <input type="text" value={input} onChange={handleInputChange} style={styles.input} />
        <br />       

        <button onClick={() => handleButtonClick('1')} style={styles.button}>1</button>
        <button onClick={() => handleButtonClick('2')} style={styles.button}>2</button>
        <button onClick={() => handleButtonClick('3')} style={styles.button}>3</button>
        <button onClick={() => handleButtonClick('4')} style={styles.button}>4</button>
        <br />
        <button onClick={() => handleButtonClick('5')} style={styles.button}>5</button>        
        <button onClick={() => handleButtonClick('6')} style={styles.button}>6</button>
        <button onClick={() => handleButtonClick('7')} style={styles.button}>7</button>
        <button onClick={() => handleButtonClick('8')} style={styles.button}>8</button>
        <br />
        <button onClick={() => handleButtonClick('9')} style={styles.button}>9</button>
        <button onClick={() => handleButtonClick('0')} style={styles.button}>0</button>        
        <button onClick={() => handleButtonClick('+')} style={styles.button}>+</button>
        <button onClick={() => handleButtonClick('-')} style={styles.button}>-</button>
        <br />
        <button onClick={() => handleButtonClick('*')} style={styles.button}>*</button>
        <button onClick={() => handleButtonClick('/')} style={styles.button}>/</button>
        <button onClick={handleClearClick} style={styles.button}>clr</button>
        <button onClick={handleResultClick} style={styles.button}>Result</button>
        <br />
      </center>
    </div>
  );
};

const styles = {
  container: {
    margin: '50px auto',
    width: '400px',
    backgroundColor: '#e6e6e6',
    borderRadius: '10px',
    padding: '20px',
  },
  input: {
    width: '100%',
    fontSize: '24px',
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
 
};

export default Calculator2;


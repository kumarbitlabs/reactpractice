import React,{useState} from 'react';

function Sum() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [total, setTotal] = useState(0);
  
    function calculateTotal() {
      setTotal(Number(number1) + Number(number2));
    }
  
    return (
      <div>
        <h2>Adding Two Numbers</h2>
        <input
          placeholder="First Number"
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <input
          placeholder="Second Number"
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
  
        <button onClick={calculateTotal}>Add Two Numbers</button>
        <p>Total: {total || ""}</p>
      </div>
    );
  }

  export default Sum;
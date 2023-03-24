import React, { useState, useEffect } from 'react';

function Effect() {
  const [count, setCount] = useState(0);
  

    function handleCount(){
      setCount(count+1);
    }

   function handleText(event){
       let name=event.target.value;
   }
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleCount}>click here to increment</button>

      <input type="text" placeholder="enter text" onChange={handleText} />
      

    </div>
  );
}

export default Effect;

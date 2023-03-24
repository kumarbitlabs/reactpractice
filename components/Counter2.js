
import React from 'react';
import useCustomhook from './useCustomhook';

function Counter2(){

     let [count,handleIncrement,handledecrement,handlereset] = useCustomhook(10);

     
    return(
      <div>
        <h1>Count:{count}</h1>
        <button onClick={handleIncrement}>click here to increment</button>
        <button onClick={handledecrement}>click here to decrement</button>
        <button onClick={handlereset}>click here to reset</button>
      </div>
 

    )
}

export default Counter2;

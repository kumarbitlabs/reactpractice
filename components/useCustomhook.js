import {useState} from 'react';

function useCustomhook(initialvalue=0){
   let   [a,setCount] = useState(initialvalue);

   function handleIncrement(){
      setCount((a)=>a+1);
      
      
   }

   function handledecrement(){
      setCount(a-1);
   }

   function handlereset(){
      setCount(initialvalue);
   }

    return [a,handleIncrement,handledecrement,handlereset];
}

export default useCustomhook;

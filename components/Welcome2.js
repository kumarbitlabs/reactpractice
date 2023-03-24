
import React,{useEffect, useState} from 'react';

function Welcome2(){

    const [count,setCount]=useState(10);

    useEffect(
         ()=>{
            document.title=`count:${count}`
         }
    )

    function Increment(){
        setCount(count+1);
    }
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={Increment}>click here to change</button>
        </div>
    )
}

export default Welcome2;

import React,{useState,useRef} from 'react';

function Exam(){    
    let [userName,setUserName]=useState('');
    let [showText,setShowText]=useState(false);

    function handleInput(event){
        event.preventDefault();
         setUserName(event.target.value);
    }

    function handleText(event){
        event.preventDefault();
        setShowText(true);        
    }

    return(
      <div>
        <form>
            <input type="text" placeholder="enter username" onChange={handleInput} />
            <button onClick={handleText}>click here</button>
        </form>
        {showText && <h1>Hello,{userName}</h1>}
      </div>
    )
}

export default Exam;

     
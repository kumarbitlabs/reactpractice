import React,{useContext} from 'react';
import {myContext} from '../App';



function ComponentF(){
    let user=useContext(myContext);
    
    return(
     <div>
       
       <h1> the user name is :{user}</h1>

     </div>

    )
}

export default ComponentF;
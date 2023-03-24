import React,{useState} from 'react';



function Car(){
  let  [car,setCar]=useState({
                brand:"ford",
                model:"mustard",
                year:1993,
                color:"red"
             });
     

    function handleColor(){
        setCar(
            (previousstate)=>{
            return{...previousstate,color:'blue'}
        })
    }
    return(

        <div>
            <h1>{car.brand}</h1>
            <p> my car model is {car.model} and it is manufactured in the 
            year {car.year} and color is {car.color}</p>

            <button onClick={handleColor}>click here to change</button>
        </div>
    )
}

export default Car;
import React,{useState} from 'react';


function Form(){
        let [name,setName]=useState("");
        let [email,setEmail]=useState("");

        function handleName(event){
            setName(event.target.value)
        }

        function handleEmail(event){
            setEmail(event.target.value)
        }

        function handleSubmit(event){
            event.preventDefault();
            document.write(name);
            document.write(email);
        }
                
    return(
        <div>
            <h1>My sample form</h1>
            <form >
                <label> name:</label>
                <input type="text" placeholder="enter name" onChange={handleName} />
                <br />
                <label> mail:</label>
                <input type="email" placeholder="enter email address" onChange={handleEmail} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
            
        </div>
    )
}

export default Form;
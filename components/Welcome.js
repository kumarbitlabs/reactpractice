import React, { Component }  from 'react';

class Welcome extends Component{

    constructor(){
        super();
        this.state={
            message:"Hello Visitor"
        }
    }
    changeMethod=()=>{
        this.setState(
            {
                message:"Thank you for listening",
                message:"Tarabhai learners"
            }
        )
    }

    unchangeMethod=()=>{
        this.setState(
            {
                message:"Hello Visitor"
                
            }
        )
    }

    render(){
        return(

            <div>
                  <h1> {this.state.message}</h1>
                  <button onClick={this.changeMethod}>lick here to change the text</button>
                  <button onClick={this.unchangeMethod}>Click here to unchage</button>
            </div>
        )
    }
}

export default Welcome;
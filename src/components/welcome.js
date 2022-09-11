
import React, { Component } from "react"


class Welcome extends Component  {

    constructor(){ 
        super()
        this.state = {
            message: "welcome aslam",
            age: "ok"
        }
    }


    changeMessage = () =>{
        this.setState({
            message: "we are happy to see you",
            age: "week"

        })
    }

    render() {
      return (
        <div className='App'>
            <h1>{this.state.message}</h1>
            <h2>{this.state.age}</h2>
            <button onClick={() => this.changeMessage()}>Change</button>
        </div>
         );
    }
    }

export default Welcome;
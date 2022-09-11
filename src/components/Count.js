
import React, { Component } from "react"


class Welcome extends Component  {

    constructor(props){
        super(props)
      this.state ={
        count: 0
      }
    }


    increament = () => {
        this.setState({
            count: this.state.count + 1
        })
       
    }

    decreameny = () => {
        this.setState({
            count: this.state.count -1
        })       
    }


    render() {
      return (
        <div className='App'>
           <h1>{this.state.count}</h1>
           <button onClick={()=> this.decreameny()}>decreament</button>
           <button onClick={() => this.increament()}>increament</button>
        </div>
         );
    }
    }

export default Welcome
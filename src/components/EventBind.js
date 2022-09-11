import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "hello"
      }
    }

    clickHandler(){
        this.setState({
            message: "goodbye"
        })
    }
    
  render() {
    return (
      <div>
            <h1>{this.state.message}</h1>
        <button onClick={() => this.clickHandler()}>click</button>
      </div> 
    )
  }
}

export default EventBind
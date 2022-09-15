import React, { Component } from 'react'

 class Clickcounter2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increamentCount = () => {
        this.setState(prevState=>{
            return { count:prevState.count +1}
        })
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <button onClick={this.increamentCount}>click {count} times</button>
      </div>
    )
  }
}
export default Clickcounter2
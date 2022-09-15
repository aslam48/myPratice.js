import React, { Component } from 'react'
import  updatedComponent from './Withcounter'

 class ClickCounter extends Component {
  render() {
  
    const {count, increamentCount} = this.props
    return (
      <div>
        <button onClick={increamentCount}>Click {count} times</button>  
      </div>
    )
  }
}
export default updatedComponent(ClickCounter)
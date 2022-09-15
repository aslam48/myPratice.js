
import React, { Component } from 'react'
import  updatedComponent from './Withcounter'


export class HoverCounter extends Component {
   
  render() {
    const {count, increamentCount} = this.props

    return (
      <div>
        <h2 onMouseOver={increamentCount}> hover {count} times</h2>
      </div>
    )
  }
}

export default updatedComponent(HoverCounter)
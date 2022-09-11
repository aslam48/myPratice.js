import React, { Component } from 'react'
import FRinput from './FRinput'

 class FRParentInput extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    }

    clickhandlet = () => {
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <FRinput ref={this.inputRef}/>
      <button onClick={this.clickhandlet}>focusinput</button>
      </div>
    )
  }
}

export default FRParentInput
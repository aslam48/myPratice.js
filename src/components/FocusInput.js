import React, { Component } from 'react'
import Input from './Inpt'

 class FocusInput extends Component {
    constructor(props) {
      super(props)
    this.componentRef = React.createRef()
    }

    clickhandler = () => {
        this.componentRef.current.focusinput()
    }

  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickhandler}>focusinput</button>
      </div>
    )
  }
}

export default FocusInput
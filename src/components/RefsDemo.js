import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
      //  this.inputRef = React.createRef()
       this.cdRef= true  
       this.setCbRef = element => {
        this.cdRef = element
       }
    }

    componentDidMount(){
      if(this.cdRef){
        this.cdRef.focus()
      }
      // this.inputRef.current.focus()
    }
  
  render() {
    return (
      <div>
        <input type='text'  ref={this.setCbRef}/>
      </div>
    )
  }
}

export default RefsDemo
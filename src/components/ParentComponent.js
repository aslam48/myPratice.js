import React, { Component } from 'react' 
import ChildComponent from './childComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname: "parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }

     greetParent = (childName) =>{
      alert(`hello ${this.state.parentname} from ${this.childName}`)
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
        </div>
    )
  }
}

export default ParentComponent
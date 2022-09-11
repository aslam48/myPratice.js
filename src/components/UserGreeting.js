
import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin: false
      }
    }

  render() {
  return  this.state.isLoggedin && <div>welcome aslam</div> 



    // return(
    //     this.state.isLoggedin ?
    //     <div>welcome aslam</div> :
    //     <div>welcome guest</div>
    // );




    // let message 
    // if (this.state.isLoggedin){
    //     message = <div>welcome aslam</div>
    // } 
    // else {
    //     message = <div>welcome guest</div>
    // }
    // return  <div>{message}</div>



    // if (this.state.isLoggedin){
    //     return <div>Welcome aslam</div>
    // }else{
    //     return <div>welcome guest</div>
    // }

    return (
      <div>
        {/* <div>welcome aslam</div>
        <div>welcome guest</div> */}
      </div>
    )
  }
}


export default UserGreeting
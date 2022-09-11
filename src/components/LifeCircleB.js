import React, { Component } from "react";

export class LifeCircleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "aslam",
    };
    console.log("lifeCircleB constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("LifeCircleB getDerivedStateFromProps")
    return null
  }

  componentDidMount(){
    console.log("component did mount")
  }

  render() {
    console.log("LifeCircleB render")
    return (
        <div>
        LifeCircleA
    </div>
    )
  }
}

export default LifeCircleB;

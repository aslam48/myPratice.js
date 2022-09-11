import React, { Component } from "react";
import LifeCircleB from "./LifeCircleB";

export class LifeCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "aslam",
    };
    console.log("lifeCircleA constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("LifeCircleA getDerivedStateFromProps")
    return null
  }

  componentDidMount(){
    console.log("component did mount")
  }

  render() {
    console.log("LifeCircleA render")
    return (
        <div>
        LifeCircleA
        <LifeCircleB/>
    </div>
    )
  }
}

export default LifeCircle;

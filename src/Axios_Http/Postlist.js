import React, { Component } from 'react'
import axios from 'axios'

 class Postlist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=> {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errormes: "Error rictriving data"})
        })
    }

  render() {
    const {posts, errormes} = this.state
    return (
      <div>
        <h2>Data</h2>
        {
            posts.length ? 
            posts.map(posts => <div key={posts.id}>{posts.title}</div>) :
            null
        }
        {errormes ? <div>{errormes}</div> : null}
      </div>
    )
  }
}

export default Postlist
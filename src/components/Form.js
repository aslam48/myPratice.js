import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: '',
         topic:''
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleuserComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSumbit = (event) => {
            alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
            event.preventDefault()
    }

  render() {
    const {username, comment, topic} = this.setState
    
    return (
      <form onSubmit={this.handleSumbit}>
          <div>
            <label>Username</label>
               <input type="text" value={username} onChange={this.handleUsernameChange}/>
         </div>

         <div>
            <label>Comment</label>
            <textarea value={comment} onChange={this.handleuserComment}/>
         </div>

         <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="ang">angular</option>
                <option value="vue">vue</option>
            </select>
         </div>

         <button type='submit'>submit</button>
      </form>
    )
  }
}

export default Form

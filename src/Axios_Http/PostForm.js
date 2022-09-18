import React, { Component } from 'react'

 class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid: "",
         title: "",
         body: "",

      }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
SubmitHandler = e => {
    e.preventDefault()
    console.log(this.state)
}

  render() {
    const { userid, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.SubmitHandler}>
            <div>
                <input type="text" name="userid"  value={userid} onChange={this.changeHandler}/>
            </div>

            <div>
                <input type="text" name="title" value={title} onChange={this.changeHandler}/>
            </div>

            <div>
                <input type="text" name="body" value={body} onChange={this.changeHandler}/>
            </div>
            <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
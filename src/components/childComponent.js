import React from 'react'


const childComponent = (props) => {
  return (
    <div>
        <button onClick={()=> props.greetHandler(" child ")}>greet parent</button>
    </div>
  )
}

export default childComponent
import React from 'react'

 const Click = () => {

let  clickhandler = () => {
    console.log("click")
}

  return (
    <div onClick={clickhandler}>Click</div>
  )
}

export default Click

import React from 'react'

function Person({person}) {
  return (
    <div>
        <p>i am {person.name}, i am {person.age} i know {person.skill}</p>
    </div>
  )
}

export default Person
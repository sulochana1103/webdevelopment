import React from 'react'

function Child1(l) {
    console.log(l)
  return (
    <div>
        <h1>This is child 1</h1>
        <h1>Data from parent {l.j}</h1>
    </div>
  )
}

export default Child1
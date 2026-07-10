import React from 'react'

function B(h) {
    console.log(h)
  return (
    <div>
        <h3>B component</h3>
        <h1>{h.Hello}</h1>
    </div>
  )
}

export default B
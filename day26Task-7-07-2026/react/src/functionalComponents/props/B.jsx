import React from 'react'
import A from './A'

function B(p) {
    console.log(p)
  return (
    <div>
        <h1>This is the data from A {p.Value}</h1>
        <A/>

    </div>
  )
}

export default B
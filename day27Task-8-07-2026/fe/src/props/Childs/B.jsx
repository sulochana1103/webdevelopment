import React from 'react'
import Child from '../childtochild/parenttochild/Child'
import { useState } from 'react'

function B(value) {
    console.log(value)
    let[A,seta]=useState(10)
  return (
    <div>
        <h3>This is B component {A}</h3>
        {/* <Child value={value}/> */}
    </div>
  )
}

export default B


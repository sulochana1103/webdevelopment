import React from 'react'
import { useState } from 'react'

function C({value}) {
    console.log(value)
   let[A,setA]= useState(88)
  return (
    <div>
        <h3>This is C component {A}</h3>
    </div>
  )
}

export default C
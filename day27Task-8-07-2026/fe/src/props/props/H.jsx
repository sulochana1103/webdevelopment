import React from 'react'
import I from './I'
import { useState } from 'react'

function H({value}) {
    let[value,setValue]=useState(10)
  return (
    <div>H
        <I value={value}/>
        {/* <h3>This is the value in H {value}</h3> */}
        {/* <h3>This is the value in H from D {props.value}</h3> */}

    </div>
  )
}

export default H
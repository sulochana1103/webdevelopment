import React from 'react'
import { useState } from 'react'

function G(props) {
    let[Value,setValue]=useState(10)
  return (
    <div>G
        <h3>Value in G {Value}</h3>
        <h3>Value in G from D {props.value}</h3>

    </div>
  )
}

export default G
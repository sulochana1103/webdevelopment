import React from 'react'
import G from './G'
import H from './H'
import { useState } from 'react'

function D({value}) {
  let[a,seta]=useState(10)
  return (
    <div>
        D 
        <h1>value in D{value} </h1>
        <G value={value}/>
        <H value={value}/>

    </div>
  )
}

export default D

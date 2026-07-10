import React from 'react'
import C from './C'
import B from './B'
import { useState } from 'react'

function A() {
    let[A,setA]=useState(10)

  return (
    <div>
        <B value={A}/>
        <C value={A}/>
    </div>
  )
}

export default A
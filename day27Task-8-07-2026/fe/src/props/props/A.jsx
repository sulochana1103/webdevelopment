import React from 'react'
import B from './B'
import C from './C'
import { useState } from 'react'

function A() {
  let[a,seta]=useState(10)
  return (
    <div>
        A
        <B value={a}/>
        <C value={a}/>
    </div>
  )
}

export default A
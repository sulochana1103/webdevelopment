import React from 'react'
import { useState } from 'react'
import { context } from './A'


function I() {
  console.log(context)
  //  let[value,setValue]= useState(10)
  return (
    <div>
        {/* <h3>This is the value in I {value}</h3> */}
    </div>
  )
}

export default I
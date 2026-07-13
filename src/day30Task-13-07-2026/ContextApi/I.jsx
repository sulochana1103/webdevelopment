import React, { useContext } from 'react'
import { useState } from 'react'
import { context } from './A'


function I() {
  // console.log(context)
  let {a,seta}=useContext(context)
  // console.log(a)
  //  let[value,setValue]= useState(10)
  return (
    <div>I 
        {/* <h3>This is the value in I {value}</h3> */}
        <h3>This is the value from A  {a}</h3>
        <button onClick={()=>{seta(a+1)}}>click</button>
    </div>
  )
}

export default I
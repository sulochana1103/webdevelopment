import React, { useContext } from 'react'
import { useState } from 'react'
import { context } from './A'


function I() {
  //console.log(context) 
  //  let[value,setValue]= useState(10)
  let{a,seta} =useContext(context)
  // console.log(d)
  return (
    <div>
        {/* <h3>This is the value in I {value}</h3> */}
        <h3>Thia is the value from A {a}</h3>
        <button onClick={()=>{seta(a+1)}}>click</button>
    </div>
  )
}

export default I
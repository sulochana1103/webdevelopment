import React from 'react'
import Parent from './Parent'
import { useState } from 'react'

function Child() {
    let a = 13
    let[A,B]=useState(1000) 
    // console.log(A)
    // console.log(B)
    // console.log(useState())
    // console.log(a) 
    function Increase(a){
        a++
        console.log(a)  
    }
    let inc=()=>{
       // console.log("Increase function called")
       //A++
       B(A+1)
    }
    
  return (
    <div>
        <Parent value={A}/>
        <button onClick={()=>{Increase(a)}}>Increase</button>
        <button onClick={}>Click</button>
    </div>
  )
}

export default Child
import React, { useState } from 'react'

function B() {
    let[A,setA]=useState(
        {
            name:"sulochana",
            city:"Hyd"
        }
    )
    console.log(A)
    let set = ()=>{
          setA({
            ...A,
            city:"Banglore"
          })
        // setA(A+1)
    }
  return (
    <div>B
        <h3>{A.name}</h3>
        <h3>{A.city}</h3>
        {/* <h3>A</h3> */}
        <button onClick={set}>click</button>
    </div>
  )
}

export default B
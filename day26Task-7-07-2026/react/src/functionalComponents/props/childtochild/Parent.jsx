import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import { useState } from 'react'

let m=10

function Parent() {
    let[data,setdata]=useState(10)
    useState()
    function hai(k){
        console.log(k)
        m=k 
        console.log(m)

    }
    hai()
  return (
    <div>
        <Child2 n={hai}/>
        <Child1 j={data}/>
    </div>
  )
}

export default Parent
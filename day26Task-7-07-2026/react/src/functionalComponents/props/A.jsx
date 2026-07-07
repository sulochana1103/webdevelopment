import React from 'react'
import B from './B'
import { Component } from 'react'
import C from './C'

function A() {
    let a=10
    function hai(k){
        console.log(k)

    }
    hai(1)
  return (
    <div>
        <h1>Value in a :{a}</h1>
        <B Value={a}/> 
        <C Value={hai}/>

    </div>
  )
}

export default A


// A is the parent Component in props
// B,C are child components of A in props

//parent to child component -- we can directly pass the data by calling
//child to parent component 
//we cant directly pass the data from child to parent 
//first we should define a function -- we have to send the props and data



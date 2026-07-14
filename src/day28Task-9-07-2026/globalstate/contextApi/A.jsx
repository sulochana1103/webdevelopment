import React, { createContext, useState } from 'react'
import B from './B'
import C from './C'
import { useDispatch, useSelector } from 'react-redux'


export let context=createContext() 
function A() {
  let data=useSelector((state)=>{
    return state
    console.log(state)
  })
  console.log(data)
  let[a,seta]=useState(100)
  return (
    <div>
        A
        <h1>Data:{data}</h1> 
        <button onClick={()=>d({type:"a"})}>Inc</button>
        <button onClick={()=>d({type:"B"})}>dec</button>
        <context.Provider value={{a,seta}}>
         <B/>
         <C/>
        </context.Provider>
        
    </div>
  )
}

export default A

//createcontext and contextprovide 
//1.createcontext -- createcontext
//2.contextprovider  --  provider

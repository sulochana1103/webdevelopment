import React, { createContext, useState } from 'react'
import B from './B'
import C from './C'

export let context=createContext()
function A() {
  let data=useSelector((state)=>{
    return state
  })
  let d= useDispatch()
  console.log(d)
  console.log(d)
  let [a,seta]=useState(100)
  return (
    <div>
        A
        <context.Provider value={a,seta}>
          <B/>
        <C/>
        </context.Provider>
        <B/>
        <C/>
    </div>
  )
}

export default A
import React from 'react'
import One from './functionalComponents/One'
import A from './functionalComponents/A'
import B from './functionalComponents/B'
import Child1 from './functionalComponents/props/childtochild/Child1'
import Parent from './functionalComponents/props/childtochild/Parent'
import Child from '../../../day27Task-8-07-2026/props/childtochild/parenttochild/Child'

function App() {
  return (
    <div>
      {/* <A/> */}
      {/* <One/>
      <B/> */}
      <Child1/>
      {/* <Parent/>
      <Child/> */}
    </div>
  )
}

export default App
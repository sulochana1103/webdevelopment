import React from 'react'
import One from './functionalComponents/One'
import A from './functionalComponents/A'
import B from './functionalComponents/B'
import Child1 from './functionalComponents/props/childtochild/Child1'

function App() {
  return (
    <div>
      <A/>
      {/* <One/>
      <B/> */}
      <Child1/>
    </div>
  )
}

export default App
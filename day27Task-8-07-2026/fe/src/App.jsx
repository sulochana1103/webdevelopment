import React from 'react'
//import Parent from './props/childtochild/parenttochild/Parent'
//import Child from './props/childtochild/parenttochild/Child'
//import A from './props/props/A'
import Student from './multipleParentandChildcomponents/Student'
import Header from './multipleParentandChildcomponents/Header'
import Employee from './multipleParentandChildcomponents/Employee'
import Content from './multiplechildcomponentsinsideaparentcomponent/Content'
import Sidebar from './multiplechildcomponentsinsideaparentcomponent/Sidebar'
import Footer from './multiplechildcomponentsinsideaparentcomponent/Footer'
import Navbar from './componenthierarchyfortheapplication/Navbar'
//import Main from "./src/Main"

//import A from './props/dummy/A'
//import A from './props/dummy/A'
//import A from './props/Childs/A'

function App() {
  return (
    <>
    {/* <A/> */}
      {/* <Parent/>
      <Child/> */}
      {/* <A/> */}
      {/* <Student/>
      <Header/>
      <Employee/> */}
      {/* <Content/>
      <Header/>
      <Sidebar/>
      <Footer/> */}
       {/* <Header />
      <Navbar />
      <Main />
      <Footer /> */}
      {/* //<Main/>  */}
      <div>
      <h1>Props and State Example</h1>

      <Student
        name="Sulochana"
        course="React JS"
      />

      <Student
        name="Rahul"
        course="Java"
      />
    </div>
    </>
  )
}

export default App
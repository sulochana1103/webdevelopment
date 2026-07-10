 import React from 'react'
//import A from './day28Task-9-07-2026/localstate/useState/A'
//import B from './day28Task-9-07-2026/localstate/useState/B'
//import A from './day28Task-9-07-2026/globalstate/contextApi/A'
import A from './day28Task-9-07-2026/localState1/A'
//import Home from './day28Task-9-07-2026/globalState1/Home'
import UserProvider from './day28Task-9-07-2026/contextApi/UserContext'
import Profile from './day28Task-9-07-2026/contextApi/UserContext'
import UserContext from './day28Task-9-07-2026/contextApi/UserContext'
import Header from './day28Task-9-07-2026/contextApi/Header'
import Dashboard from './day28Task-9-07-2026/contextApi/Dashboard'
import Employees from './day29Task-10-07-2026/Employee'
import EmployeeForm from './day29Task-10-07-2026/EmployeeForm'
import UpdateEmployee from './UpdateEmployee'
//import Users from './day29Task-10-07-2026/User'
//import Dashboard from './day28Task-9-07-2026/contextApi/Profile'
import Users from './day29Task-10-07-2026/HttpMethods/Get'

//import UserContext from "./UserContext";


function App() {
  const user = "Sulochana";
  return (
    <div>
      {/* <A/>
      <B/> */}
      {/* <A/> */}
      {/* <A/> */}
      {/* <UserProvider>
      {/* <Home /> */}
      {/* <Profile />
    </UserProvider> */}
      {/* <Profile /> */}
      {/* <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider> */}
    {/* <Employees/> */}
    {/* <EmployeeForm/> */}
    {/* <UpdateEmployee/> */}
    {/* <Users/> */}
    <Post/>
      </div>
  )
}

export default App



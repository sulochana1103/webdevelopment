import React, { useState } from 'react'
// import Signup from './Signup'
import Signup from './Signup'
import Login from './Login'

function Profile() {
    let[status,setstatus]=useState("new") 
    let[loginIn,setlogin]=useState(true)
    let[exist,setExist]=useState(false)
    let changeLogin = ()=>{
        setlogin(true)
    }
  return (
    <div>
        <div>{/* <h1>Welcome user</h1> */}</div>
        {exist && <h1>Hai</h1>}
        {loginIn && <h1>Hello</h1>}
        
        {/* { || } */}
    
    {loginIn ? (
        <div>
         <h1>Profile</h1>
         </div>
         ): exist? <Login value={changeLogin}/> :<Signup/>}
    {
        loginIn? <button onClick={()=>setlogin(false)}>Logout</button>:

        exist? <div>
        <p>
            if you are a new user? click
        </p>
        <button onClick={()=>setExist(false)}>signup</button>
    {/* <button>if you are a new user? click login </button> */}
    </div>:  <div>   
         <p>
            if you are a new user? click
        </p>
        <button onClick={()=>setExist(true)}>Login</button>
        </div>

    }

    {/* <div>
        <h1>Login Page</h1>
    </div>
    <div>
        <h1>Signop Page</h1>
    </div> */}
    </div>
    
  )
}

export default Profile
import React from 'react'

function Login({value}) {
  useEffect(()=>{
    console.log("Profile page")
  })
     console.log(value)
    let handlesubmit=(e)=>{
        e.preventDefault()
        //e.preventDefault()
        value()
        //api call post (user Id password)
        //success
        //failure
        //true -> profile page 
        //false -> login page
    }
  return (
    <div>
        
            <h1>Login</h1>
            <form onSubmit={handlesubmit}>
                {/* ..... */}
                <button type='sumbit'>Login</button>
            </form>
        
    </div>
  )
}

export default Login
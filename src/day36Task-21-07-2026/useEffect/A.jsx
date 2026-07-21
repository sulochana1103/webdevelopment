import React, { useEffect, useState } from 'react'

function A() {
    let[a, setA]=useState([])
    useEffect(()=>{
        console.log(a)
    },[a])
useEffect(()=>{
    console.log("Hello")
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((d)=>d.json())
    .then((d)=>
        setA(d) 
        // console.log(d) 
    // console.log(Array.isArray(d))
        // console.log(typeof(d))
        
    )
},[])
console.log(a)
console.log(a[0])
console.log(a[0]?.title);


  return (
    <div>
        {/* {a} */}
        <h1>{a[0]?.title}</h1>
        <h3>{a[0]?.id}</h3>
        {/* {a[0]?.userId} */}
        {/* map  */}
        {a.map((b)=>{
            return 
            (<div key={b.id}>
                {console.log(b)}
              <h1>{b.title}</h1>
              <h3>{b.id}</h3>
              </div> )
        })} 
        {/* <button onClick={()=>seta(a+1)}>change</button> */}
        {/* <button onClick={()=>setA(a+1)}>change</button> */}
    </div>
  )
}

export default A
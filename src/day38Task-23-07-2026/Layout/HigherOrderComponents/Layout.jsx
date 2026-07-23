import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({value}) {
    console.log(value)
  return (
    <div>Layout
        <Header/>
           <h1>Layout</h1>
           {<value/>} 
        <Footer/>
    </div>
  )
}

export default Layout
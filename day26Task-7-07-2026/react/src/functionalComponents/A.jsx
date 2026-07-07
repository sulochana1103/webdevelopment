import React from "react"
import B from "./B"
import { StrictMode } from "react"
function A(){
    let A=10
    let a={age:10}
    console.log(a)

    //own data (state)
    //api calls
    //parent component (props) -- data comes from parent

    return(
        <StrictMode>
            <h1>This is A component 10</h1>
            <h1>a</h1>
            <h1>{a.age}</h1>
            <B/>
        </StrictMode>
    )
}
export default A

//we use flower braces to get the output in jsx
//strictMode
//fragmentMode
//empty tag

//in jsx what are valid and what are invalid things
//valid                                                       invalid
//strings,arrays,number,function call                 loops,variables,boolean,null values,objects


//why strict mode is used
//unwanted components will not be rendered in the ui

//api call to fetch data from backend
//routing to change page to page


//in app.jsx A is the child component
//in Acomponent B is the child component where we are calling Bcomponent
//parent to child components

//data is send through parent component



//Api methods

//get  --->  fetching  the data
//post --> to send the data
//put --> it changes the entire record
//patch --> updates only the data
//delete --> to delete the data 


//frontend  --> apicall with (get) method  --> request to backend(Routes, middleware, controllers)

//https://jsonplaceholder.typicode.com/users(in which server it is running)


let data = {
    name:"sulochana"
}

fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    return data.json()
    //console.log(data)
})
.then((d)=>{
    data = d
    console.log(d)})
.catch((e)=>{
    console.log(e)
})
//console.log(data)


console.log(data)


// fetch("url",{
//     method:"POST",
//     body:JSON.stringify({...data..}),
//     headers{
//         "content-type":
//     }
// })


//JavaScript Output Methods
//JavaScript output methods are used to display information to the user or developer.

//console.log()
console.log("Hello World")

//document.write()
document.write("Welcome to JavaScript")

//alert()
alert("Login Successful!")



alert("Hello")
console.log(window.innerWidth)


setTimeout(() => {
  console.log("Runs after 2 seconds")
}, 2000)

setInterval(() => {
  console.log("Runs every second")
}, 1000)



console.log(navigator.userAgent)
console.log(navigator.language)
console.log(navigator.onLine)




console.log(location.href)
console.log(location.hostname)
console.log(location.protocol)



async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    )

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
getUsers()




//An API (Application Programming Interface) allows one application to communicate with another and exchange data.

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


    async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getUsers()



fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "JavaScript",
        body: "Learning Fetch API"
    })
})
.then(response => response.json())
.then(data => console.log(data))



//Git is a version control system that tracks changes in your code

// Check Git Version
// git --version

// Configure Git
// git config --global user.name "Your Name"
// git config --global user.email "your@email.com"


// Initialize a Repository
// git init


// Check Repository Status
// git status



// Add Files
// git add .


// Commit Changes
// git commit -m "Initial commit"



// Push Code
// git push -u origin main


fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    const user = users.find(u => u.id === 5)
    console.log(user)
  })



  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log(users.length)
  })




  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log(users.length)
  })



  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    posts.slice(0, 10).forEach(post => {
      console.log(post.title)
    })
  })




  
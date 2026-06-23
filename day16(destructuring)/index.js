let  a = ["sulochana",1,2,3,4,5]
let [A,B,C] = a
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(A,B,C)

let obj={name:"sulochana",location:"hyd",details:{ }}

console.log(obj.name) 

console.log(obj.name) 

var M=obj.name 

console.log(M)




//itterators    and   generators  

for(i in a){
    console.log(i)
}



//current value and done state

let num = [1,2,3]
let k = num[Symbol.iterator]()
console.log(k.next())

console.log(k.next())

console.log(k.next())

console.log(k.next())

console.log(k.next())


//generators
function* hai(){

    yield "hello";
    yield "bye";
    yield "done";
} 
//     console.log("Hello")
//     console.log("bye")
//     return "done"
// }
console.log(hai())



let n=hai()
console.log(n.next()) 
console.log(n.next()) 
console.log(n.next()) 
console.log(n.next()) 



//Promise.all() -- takes an array of promises and returns a single promise that:
// Resolves when all promises resolve.
// Rejects immediately if any one promise rejects.


const p1 = Promise.resolve("HTML")
const p2 = Promise.resolve("CSS")
const p3 = Promise.resolve("JavaScript")

Promise.all([p1, p2, p3])
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  }) 



//Promise.race() -- returns the result of the first promise that settles (either resolves or rejects).

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("First");
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Second");
  }, 2000);
});

Promise.race([promise1, promise2]).then((result) => {
  console.log(result);
});



//Promise.allSettled()  -- waits for all promises to finish, regardless of whether they resolve or reject.

const s = Promise.resolve("Success")
const w = Promise.reject("Failed")

Promise.allSettled([s, w]).then(results => {
  console.log(results)
})



//Promise.any()  -- returns the first fulfilled promise and ignores rejected promises. It rejects only if all promises reject.

const y = Promise.reject("Error")
const u = Promise.resolve("Data Loaded")
const h = Promise.resolve("Backup Data")

Promise.any([y, u, h]).then(result => {
  console.log(result)
})



// async and await make asynchronous code easier to read and write. 
// They allow you to write promise-based code that looks similar to synchronous code.

// async makes a function return a promise.
// await pauses execution until the promise is resolved.


async function greet() {
  return "Hello!"
}
greet().then(console.log)



//Inside an async function, await waits for a promise to complete before moving to the next line.


//Destructuring is a JavaScript feature that extracts values from arrays or properties from objects into separate variables.


//An iterator is an object that allows you to access elements one at a time using the next() method. 
// Each call to next() returns an object with value and done properties.


//A generator is a special function declared with function* that can pause execution using yield and resume later.






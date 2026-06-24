//all

// new Promise(()=>{

// })


let promise1 = Promise.reject("completed")
let promise2 = Promise.resolve("Failure")


Promise.all([promise1,promise2])
.then(()=>{
    console.log("Done")
})
.catch(()=>{
    console.log("Failed")
})



// let ab = Promise.resolve("p1 completed")
// let ba = Promise.reject("p2 completed")


// Promise.all([ab,ba])
// .then((a)=>{
//     console.log(a)
// })
// .catch((a)=>{
//     console.log(a)
// })


//promise.race()

// let pa=Promise.resolve("p1 done")
// let pb=Promise.reject("p2 done")

let pa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("pa is done")
    },1000)
})

let pb=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("pb is done")
    },500)
})

Promise.race([pa,pb])
.then((pa)=>{
    console.log(pa)
})
.catch(()=>{
    console.log()
})


//Promise.allSettled()

Promise.allSettled([pa,pb])
.then((a)=>{
console.log(a)
})


//Promise.any()

Promise.any([pa,pb])
.then((a)=>{
    console.log(a)
})


//success case .then

//failure case  .catch()


//Async and await

async function hai(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done")
        },2000)

    })
}


//for api calls we use async
async function hello1(){
    return await hai()
}

let s =  hello1()
console.log(s)
//await hai()




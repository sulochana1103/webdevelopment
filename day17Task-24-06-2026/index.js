//import good from './index1.js'
import good from './index1.js'

console.log(good)


//default export 
export default function sum(a,b){
    return a+b
}

export let arr = [1,2,3,4] 

export let a = 10

//named export 
export function hello(){

}

//named export
export function diff(){

}


function bye(){

}

console.log(sum(1,2))



//2ways

//default           only 1 export can be done 
// we can import with any name
//no need of {} at the time of input

//named export      n number


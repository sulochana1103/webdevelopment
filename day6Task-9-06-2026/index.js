//function declaration  -- A function declared using the function keyword

//function functionname(){

//}
//functionname()


//function expression -- A function stored in a variable
//3ways
//1.named
//2.anonmous
//3.arrow

//var or let or const


//named
// let a = function functionname(){
        //return
// }

const factorial = function fact(n) {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
};
console.log(factorial(5));

//Anonymous function  ---  A function without a name.
//let b = function(){
       //return
//}

//Anonymous Function as a Callback
setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);



//Arrow function  //E.S-6
//let c = ()=> {
    //return
//}


//recursive function  -- function calling itself


//                           // var                       //let                             //const
//redclare                    yes                          no                                  no (Declaring the same variable once again)
//reassignment                yes                          yes                                 no
//initialization              yes                          yes                                 no
//hoisting           
//  



//hoisting -- accessing the memory value even before its execution



//var
var m=10
console.log(m)
m=20
console.log(m)  
var m=30
console.log(m)




var age=10
console.log(m)
m=20
console.log(m)  
var age=30
console.log(m)



//undefined -- variable is there but the value is not there 

//not defined  -- variable is not there


//let
let k = 10
console.log(k)
k=20
console.log(k)
//let k = 90


//const
const l=10
console.log(l) 
// const l = 20
// console.log(l) 



//initialization
var z 

let y

const x=0




//2phases
//memory creation
//code execution

console.log(p)
var p = 10
console.log(p)



//console.log(n)
let n = 10
console.log(n)


//scope


//function declaration
function Hello(){
    console.log("Hello World")
}
Hello()


//function expression
const Hello1= function(){
    console.log("Hello World")
}
Hello1()


//arrow function
const Hello2 = ()=> {
    console.log("Hello World")
}
Hello2() 

//Anonymous Function
let x1 = function(){
    console.log("Hello World")
}
x1()


//addition
let add = function(a,b){
    return a+b
}
console.log(add(10,20))


















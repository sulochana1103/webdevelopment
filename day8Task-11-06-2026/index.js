let sum = 0
let one = function rec(a){
    if(a==0){
        return 0
    }
    //sum += a
    return a+rec(a-1)
}
////a=10 sum=0-->sum=10 a=9  sum=19.......a-1 x+1  0 sum   -1   -2  -3
//sum of first 10 natural numbers
console.log(one(9))
console.log(one(10))


function hai(a){
    console.log("One",a)
    return "done"
}
console.log(hai(10));


// //let sum = 0
// let one = function rec(a){
//     if(a==0){
//         return 0
//     }
//     //sum += a
//     return a+rec(a-1)
// }

//return (10+ 9+ 7+6 +5+4+3+2+1 rec(0))

//IIFE (Immediately invoked function expression)
// (function() {
//         console.log("IIFE")
//     }
// )() //paranthesis is for calling a function


// (function () {
//     console.log("IIFE Executed");
// })();

(function () {
    console.log("Hello from IIFE");
})();


//Function Currying
//single function with multiple parameter
// function functionname(a,b,c,d){

// }
// functionname(10,20,30,40)



// function functionname(a,b,c,d){
//     function(){
//         function(){
//             function(){

//             }
//         }
//     }
// }
// functionname(10,20,30,40)

const add1 = a => b => c => a + b + c;
console.log(add1(10)(20)(30));


function add(a){
    return function(b){
        console.log("second function",b,a)
        return "Done"

    }
    //console.log(a+b)
}
//console.log(add(10))
var M = add(10)
console.log(M())


//first class function -- A function that can be stored in a variable and can be passed as an argument and can be return from anpther function it is called as first class function
//pure function  -- ouput can be gussed by the user
//impure function -- we cant guess that value(output is generated randomly)

function randomNumber() {
    return Math.random();
}
console.log(randomNumber());

//Higer order function
function execute(fn) {
    fn();
}


//this keyword

console.log(this)//this refers as current object

function hello(){
    console.log(this)    
}
hello()



//in the object to get a proerty how can we get an in how many ways
//how to get static and dynamic



let obj={
    name:"sulochana",
    hello(){
        console.log(this)
    },
    hello1:()=>{
        console.log(this)
    }
}
obj.hello()
obj.hello1()
//console.log(obj[name])


//for arrow function it wont have its own this from(lexical scope)/parent scope obj will be taken 
//using arrow function
let ar=()=>{
    console.log(this)
}
ar()

//lexical scope -- parent scope
//change of this reference
//to change we have 3 ways
//call  apply and bind 


function hello(){
    console.log(this)
}
hello.call(obj,10,20)

//call syntax
//functionName.call(object, arg1, arg2);

//1st argument will be object reference
//next will be the arguments for that function


//apply syntax
//functionName.apply(object, [arg1, arg2]);
//apply
hello.apply(obj,[10,20])

//bind syntax
//const newFunc = functionName.bind(object);
//bind
hello.bind(obj,10,20)()

//top most object is window object
//do arrow functions with call, apply and bind


// Lexical Scope
// Lexical Scope means a function can access variables from its parent (outer) scope.
// The scope is determined by where the function is written, not where it is called.

//
function add(a){
    return function(b){
        return function(c){
            return a+b+c

        }
    }

}
console.log(add(10)(20))


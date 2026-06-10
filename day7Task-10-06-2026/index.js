//scope

function hai(a,b){
    console.log(a,b)
}
hai(1,2)


//var d=10
function hai(a,b,d){
    console.log(a,b,d)
}
hai(1,2) //arguments


//var d=10
// let d=10
// function hai(a,b){
//     var m = 100
//     console.log(m)
//     console.log(a,b,d)
// }
// hai(1,2) //arguments
// console.log(m)


//variable is declared in outside the function
//variable is declared inside the function


// let d=10
// function hai(a,b){
//     let m = 100
//     console.log(m)
//     console.log(a,b,d)
// }
// hai(1,2) //arguments
// console.log(m)
//block
{
    var k=101
    var z=99
    const za=80
    console.log(k)
    //console.log(m)
    console.log(z)
    console.log(za)

}
// console.log(k)
// console.log(z)
// //console.log(za) 


//let and const are block scope
//function var  ,   let ,     const
//var --> can be accessed out side the function
//let, const --> cannot be accessed out side the block


//var is a functional scope
//let and const are block



//recursive function   --  function calling itself

let sum=0
let one = function rec(a){
    if(a==0){
        return 0
    }
    sum += a
    return sum+rec(a-1) 
}
//a=10 sum=0-->sum=10 a=9  sum=19.......a-1 x+1  0 sum   -1   -2  -3
//sum of first 10 natural numbers
console.log(one(10))


//recursive function 
function functionname(){
    //base condition 
    //recursive call
}
//print numbers 1 to 5
function printNumbers(n){
    if(n>5){
        return;//base condition
    }
    console.log(n)
    printNumbers(n+1)

}
printNumbers(1)
//factorial number
function factorial(n){
    if(n===0 || n=== 1){
        return 1;
    }
    return n*factorial(n-1)

}
console.log(factorial(5))
//without the condition if we call the recurssive it gives range error



function hai(a,b){
    console.log(a,b)
    console.log(arguments)
}
hai(1,2,3,4,5)


//rest parameter
function names(a,b,...c){
    console.log(c)

}
console.log(names(1,2,3,4,5,6,7,8))



//Operators
//Arithmetic operators(+,-,/,%,++,--,*)


//Arithmetic operators
//Addition

var a = 10
var b= 2 
console.log(a/b)   //5
console.log(a%b)    //0 

//Increment
//Pre Increment
//Post increment 
console.log(a)    //10 
console.log(++a)  //11
console.log(a++)  //11 (post increment)
console.log(a)    //12



//Decrement 
//Pre
//post
console.log(a)  //12
console.log(--a) //11 
console.log(a--) //11
console.log(a)   //10


var A=2
var B=3
console.log(A*B)   //6
console.log(A**B)  //8

//Assignment operator(=)
// +=   -=    short hand operator   *=    /=    %=

var A=2
var B=3
console.log(B)   //3
var C=A+B
B=C
console.log(C)  //5
console.log(B)  //5 



var A=2
var B=3
console.log(B)   //3
B+=A    //B=B+A
console.log(B)  //5



//Comparision operators
//used to compare two values  //result will be a boolean value (true / false)


//< >  <=  >=   
// ==     loose equality(value)
// ===    strict equality(value and its datatype will be checked)
// !=     loose inequality
//  !==   strict  inequality


var a=10
var b= 8
var c = 10
console.log(a<b)  //false
console.log(a>b)  //true
console.log(a<c)  //false
console.log(a==b)  //false
console.log(a===b)  //false
console.log(a<=c)  //true


var d = 10
var e = 10
var f = "10"
console.log("loose equality",d==e)   //true
console.log(d==f)   //true
console.log("strictly equality",d===f)   //false
console.log("loose inequality",d!=e)    //false



//Logical operators
//AND   (&&)if both the conditions are true then the result will be true 
//OR    (||)if any of the condition is true then result will be true
//NOT   (!)  

console.log(2<4)                  //true
console.log((2<4) && (2>4))       //false
console.log((2<4) || (2>4))       //true
console.log(!(2<4))               //false


// Bitwise 

// Ternary
//syntax:   ?  True  : False

let salary = 10000
salary >= 10000? console.log("Apply for the credit card"): console.log("You are not eligible")

// String 

// type of
var first = "sulochana"
var last = "chinthigunti"
console.log(first+ ""+ last)

//Template literal
console.log(`My name is `+ first,last +` and i am working as Associate software engineer`)
console.log(`My name is ${first} ${last} and i am working as Associate software engineer`)


//Bitwise
// 00001111
//     8421
// 0-> 0000
// 1-> 0001
// 2-> 0010
// 3-> 0011


// && -> if both are true then the result will be true 
// 1&2
// 0001
// 0010
//0000
console.log(1&2)    //0
console.log(1|2)    //3




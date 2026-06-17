//date 

let d = new Date()
console.log(d)


//Template string
let a = 10
let b = 20

console.log("The value of a is:",a,"The value of b is:","and their sum is :",a+b)
console.log(`The value of a is ${a} The value of b is ${b} and their sum is ${a+b}`)


//Math object
var ab = 10
var bc = 10.2

console.log(Math.floor(bc))   //10
console.log(Math.ceil(bc))    //11
console.log(Math.round(bc))   //10
console.log(Math.sqrt(9))  //3
console.log(Math.pow(2,3))   //8
console.log(Math.random() * 10000)


//generating random number for a certain range
let randomNum = Math.floor(Math.random() * 10) + 1
console.log(randomNum)


//string
let s = "Hello"
console.log(s.length)

//touppercase

//tolowercase

//garbage collector



//Definition on for...in
//"for...in is a JavaScript loop that iterates over the keys or property names of an object. 
// In arrays, it returns the indexes of the elements instead of the elements themselves."
//for in
//used to iterate over properties (keys)
//returns the index/key
//on objects for in only applicable for of wont applicable
let person={
    name:"sulochana",
    age:25

}
for(let x in person){
    console.log(x)
}

let employee=["sulochana",25,"hyd"]
//for in on arrays
for(y in employee){ //if we use for in on arrays we get index values 
                    //if we use for in on objects we get keys.
    console.log(y)
}

// syntax 
// for(let key in object){
//     console.log(key,object[key])
// }

//print all keys and values
let student={
    name:"sulochana",
    age:25,
    course:"JS"
}
for(let key in student){
    console.log(key,":",student[key])
}

//print only keys
for(let key in student){
    console.log(key)
}


//print only values
for(let key in student){
    console.log(student[key])
}


// for...in                           vs                                 for...of
// for...in	                                                             for...of
// Iterates over keys (property names)	                                 Iterates over values
// Best suited for objects	                           Best suited for arrays, strings, and other iterables
// Returns property names or array indexes	                         Returns element values directly



//date object
//The Date object is used to work with dates and times. 
// It can create, format, compare, and manipulate dates. 


//create current date and time 
let today = new Date()
console.log(today)

//create a specific date
let birthday = new Date("2000-05-15")
console.log(birthday)


//date methods
let now = new Date()

console.log(now.getFullYear())   //2026
console.log(now.getMonth())
console.log(now.getDate())      //17
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())


//setvalues

let date = new Date()
date.setFullYear(2030)
date.setMonth(11)
date.setDate(25)
console.log(date)


//Implement template literals with dynamic data
// Template literals (also called template strings) are strings enclosed in backticks (`) 
// that allow you to:
// Insert variables and expressions using ${}.
// Create multi-line strings easily.
// Build dynamic strings without using the + operator.

//syntax
//`Text ${expression}`

//insert variales
let name = "sulochana"
let age = 25
let m = `my name is ${name} and i am ${age} years old`
console.log(m)


//perform calculations
let a1 = 10
let b1 = 20
console.log(`the sum of ${a1} and ${b1} is ${a1+b1}`)


// Advantages of Template Literals
//  Easier to read than string concatenation.
//  Embed variables and expressions directly using ${}.
//  Support multi-line strings without \n.
//  Useful for generating dynamic messages and HTML


//Practice commonly used Math object methods.
//Math.pi  --  returns the value of pi
console.log(Math.PI)

//Math.round()  --  rounds a number to the nearest integer
console.log(Math.round(4.2))       //4

//Math.floor()  -- Rounds a number down to the nearest integer
console.log(Math.floor(7.9))       //7


//Math.ceil()  -- Rounds a number up to the nearest integer
console.log(Math.ceil(7.1))    //8 //NaN

//Math.trunc()  --  Removes the decimal part and returns only the integer portion
console.log(Math.trunc(8.9))   //8
console.log(Math.trunc(8.1))   //8


//Math.max() --- Returns the largest value
console.log(Math.max(10, 50, 30, 20))     //50


//Math.min() --  Returns the smallest value
console.log(Math.min(10, 50, 30, 20))     //10


//Math.pow()  --  Calculates a number raised to a power
console.log(Math.pow(2, 3))    //8
console.log(Math.pow(5, 2))     //25


//Math.sqrt() --  Returns the square root of a number
console.log(Math.sqrt(64))     //8
console.log(Math.sqrt(81))     //9



//Create programs using String object methods
//length -- find the length of a string
let str = "javascript"
console.log(str.length)


// touppercase() -- convert to uppercase
console.log(str.toUpperCase())


//tolowercase() -- convert to lowercase
console.log(str.toLowerCase())

//charAt() – Get Character at a Specific Position
console.log(str.charAt(4))








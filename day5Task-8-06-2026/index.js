//Ternary Operator

// if condition is true then the conditions which are there in the 1st condition will be executed if the conditions are false then the other conditions will be executed
// condition ? true case: false case

//ternary operator (? :) is a shorthand for an if...else statement

// 3conditions 

let day = 2
day === 1 ? console.log("day one"): day === 2 ?console.log("day two"): console.log("day three")
// 2  //day two
// 3  //day three

//check even or odd
let num = 8
r=num%2==0?console.log("even"):console.log("odd")


let num2 = 7;
if (num2 % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//greater number
let a = 23
let b = 12
g = a>b ?console.log("a"):console.log("b")



let a1 = 25;
let b1 = 40;
if (a1 > b1){
    console.log("a is greater");
} else{
    console.log("b is greater");
}


//positive or negative
let num1 = -12
num1  >= 0? console.log("positive"):console.log("negative")

let num3 = -10;
if (num3 > 0) {
    console.log("Positive Number");
} else {
    console.log("Negative Number");
}

//Loops

//For loop
//while loop  -- A while loop executes a block of code as long as the specified condition is true.
//do while  -- A do...while loop executes the code block at least once and then checks the condition.
//for of  --  A for...of loop is used to iterate through the values of iterable objects such as arrays and strings.
//for in  --  A for...in loop is used to iterate through the properties (keys) of an object.
//for each


// Ternary Operator	               Short form of if...else
// For Loop                        Used when iterations are known
// While Loop	                   Runs while condition is true
// Do While Loop	               Executes at least once before checking condition
// For In Loop	                   Iterates object keys/properties
// For Of Loop	                   Iterates values of arrays/strings
// Infinite Loop	               Loop that never terminates

// for(initialization;CSSConditionRule;update){

// }

for(let i=0;i<=5;i++){
    console.log(i)
}

let grades=[1,2,3,6]
console.log(grades[0])
console.log(grades[1])

for(let i=0;i<5;i++){
    console.log(i)
}


//while loop

// while(condition){

// }


// let i = 0
// while(i<10){
//     console.log(i)
//     i+=1
// }



// let i = 1
// let count=0
// //list first 10 even numbers
// while(count<=10){
//     if(i%2==0){
//         console.log(i)
//     }
//     i+=1
//     count++
// }


let i = 1
let count=0
//list first 10 even numbers
while(count<=10){
    if(i%2==0){
        console.log(i)
        count++
    }
    i+=1
    count++
}
    


//do while
//minimum number of iteration 1

//in do while code will be executed first and then the condition is checked
do{
    console.log("Hello")
}while(false)


//in while loop condition is executed first and then code will be executed    
 while(false){
    console.log("Hai")
 }   



 //Infinite loop -- when condition is always true



//for of  Arrays //value

//for in Objects  //key based on that key we will get the value we will get the value we can use it on arrays

//in arrays we have symbol.iterator -- calling next method
////in objects we do have symbol.iterator 

let arr = [1,2,3]
console.log(arr)
for(a of arr){
    console.log(a)
}

// let obj={a:"hello",b:"hai"}
// console.log(obj)
// for(i in obj){
//     console.log([i])
// }

// let obj={a:"hello",b:"hai"}
// console.log(obj)
// for(i in obj){
//     console.log(obj[i])
// }


let obj={a:"hello",b:"hai"}
console.log(obj[a])        //static keys
console.log(obj["a"])     //dynamic keys

for(i in obj){
    console.log(obj[i])
}



for(i in arr){
    console.log(i)
    //console.log(obj[i])
}



// for(a of obj){
//     console.log(a)
// }



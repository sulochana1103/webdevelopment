//Objects
//In objects data will be stored in key value pairs
//keys will be of strings
//key and value will be separated by ,
//{}


//why should we use objects
//to store related data

// let emp={
//     empname:"",
//     emailid:"",
//     bgroup:"",
//     role:"",
//     address:"",
//     salary:"",
//     phnumber:"",
//     doj:"",
//     dob:"",
// }


//4ways


//objectliteral way
let b = {}
console.log(b)


//new keyword

let a = new Object()
console.log(a) 


//constructor



//class 

var obj = {one:"a",b:"hello",c:20}
console.log(obj)
//dot operator
console.log(obj.c)
//
console.log(obj["one"])

obj.hello="Good Morning"

console.log(obj)

delete obj.one
console.log(obj)

obj.b="hello"
console.log(obj) 


let numbers = [10, 20, 30, 60]
let result = numbers.some(function(num) {
    return num > 50
})
console.log(result)


//Practice array iteration using for, for...of, and forEach().

let numbers1 = [10, 20, 30, 40, 50];

//for loop
// When to use
// When you need the index.
// When you want to iterate forwards or backwards.
// When you need fine-grained control over the loop.


//for...of Loop
// When to use
// When you only need the element values.
// When you don't care about the indexes.


//forEach() Method
//When to use
// When you want to perform an action for each element.
// When you don't need to manually control the loop.


//calculate sum using for
// let numbers = [10, 20, 30, 40]
// let sum = 0
// for (let i = 0; i < numbers1.length; i++) {
//     sum += numbers1[i]
// }
// console.log(sum)


//calculate using for..of
let numb = [10, 20, 30, 40]
let sum = 0
for (let i = 0; i < numb.length; i++) {
    sum += numb[i]
}
console.log(sum)


//calculate sum using foreach
let n1 = [10, 20, 30, 40]
let sum1 = 0
n1.forEach(function(value) {
    sum1 += value
});
console.log(sum1)


//	Implement join(), sort(), map(), filter(), and reduce().

//join()  --  The join() method combines all elements of an array into a single string.

//syntax
// array.join(separator)

let fruits = ["Apple", "Banana", "Mango"]
let result1 = fruits.join()
console.log(result1)

// sort() --  The sort() method sorts the elements of an array.
//on strings
let names = ["David", "Alice", "Charlie", "Bob"]
names.sort()
console.log(names)


//numbers(ascending)
let n2 = [40, 10, 100, 5]
n2.sort((a, b) => a - b)
console.log(n2)

//numbers(decending)
 let n3 = [40, 10, 100, 5]
numbers.sort((a, b) => b - a)
console.log(n3)


// /map() ---- The map() method creates a new array by applying a function to every element.
//syntax
// array.map(function(element) {
//     return transformedValue;
// });

//filter() --  The filter() method creates a new array containing only the elements that satisfy a condition

//even numbers
let n4 = [1, 2, 3, 4, 5, 6]
let even = n4.filter(num => num % 2 === 0)
console.log(even)


// /reduce() -- The reduce() method processes all elements of an array and reduces them to one final value.
//syntax
// array.reduce(function(accumulator, currentValue) {
//     return updatedAccumulator;
// }, initialValue);

// accumulator → Stores the running result.
// currentValue → Current element in the array.
// initialValue → Starting value of the accumulator.

let n6 = [10, 20, 30, 40]
let sum2 = numbers.reduce((total, num) => total + num, 0)
console.log(sum2)


//	Remove duplicate elements from arrays.
let arr = [10, 20, 30, 20, 40, 10]

//Using Set
let arr8 = [10, 20, 30, 20, 40, 10]
let uniqueArray = [...new Set(arr8)]
console.log(uniqueArray)

// new Set(arr) removes duplicates.
// ... (spread operator) converts the Set back into an array.

//Using filter()
let arr7 = [10, 20, 30, 20, 40, 10]
let a9 = arr.filter((value, index) => {
    return arr7.indexOf(value) === index
})
console.log(a9)


//Using a for...of Loop
let arr4 = [10, 20, 30, 20, 40, 10]
let n = []
for (let value of arr4) {
    if (!n.includes(value)) {
        n.push(value)
    }
}
console.log(n)

//Using a for Loop
let arr = [1, 2, 2, 3, 4, 4, 5]
let unique = []
for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i])
    }
}
console.log(unique)



//Array
//collection of data(collection of homogenous or heterogenous data)
//to represent an array we use []
//we can store different kind of data

//In is used to store collection of data whether it is homogeneous or heterogeneous data
//homogeneous -- similar kind of data
//heterogeneous -- different kind of data

["hello",12,true,null,undefined,{name:"sulochana"},[1,23,4,5,6,[1,2,34,,55,6,6]],"end"]

//Multidimensional arrray   //An array which is present in another array

//what is the need for the array
//name
//location
//address
//.......

//to store the data -- var let and const


// var name = "sulochana"
// var location = "Hyd"
// var address = ""
// var bloodgroup = ""
//.....address


var arr=["1",2,3]
console.log(arr)


//add 4
var arr=["1",2,3,4]
console.log(arr)

//add 5
var arr=["1",2,3,4,5]
console.log(arr)



//we have methods in an array
//adding an element to an array
//push  --  is used to add the elements at the end of the array

function hai(){
    arr.push(6)
}
hai()
console.log(arr)
arr.push(7)
console.log(arr)


//unshift() --  is used to add the elements at the beginning of the array

arr.unshift(8)
console.log(arr)

//splice(indexvalue,deletecount,new)  --   we can add at any location
arr.splice(2,0,"Hello")
console.log(arr)


arr.splice(2,2,"Hello")
console.log(arr)



//how to access a single item in an array items
//with the help of index values
//it starts from 0 and ends at n-1 //n--> length of the array

var a=[1,2,3,4]
console.log(a[0])    //1
console.log(a[3])    //4
//referenceofthearray[0][1][2][3]...... n-1

//remove element from the array

//pop
arr.pop()
console.log(arr)


//shift  --  Remove from beginning
arr.shift()
console.log(arr)

//splice
arr.splice(1,1)
console.log(arr)


//using splice add elements add in the starting and delete at the end remove at the starting and remove at the end
//find the length of an array not only predefind how to do manually

//Add an element at the beginning using splice()
let arr5 = [20, 30, 40]
arr5.splice(0, 0, 10) // Start at index 0, delete 0 items, insert 10
console.log(arr5)

//Add an element at the end using splice()
let arr7 = [10, 20, 30]
arr7.splice(arr7.length, 0, 40)
console.log(arr7)

//Remove the first element using splice()
let arr3 = [10, 20, 30, 40]
arr3.splice(0, 1)  // Remove 1 element starting at index 0
console.log(arr3)

//Remove the last element using splice()
let arr8 = [10, 20, 30, 40]
arr8.splice(arr8.length - 1, 1)
console.log(arr8)

//find length using for of
let ar = [10, 20, 30, 40, 50]
let count = 0
for (let value of ar) {
    count++
}
console.log(count)
console.log(ar)

//find length using for in
let ar1 = [10, 20, 30, 40]
let count1 = 0
for (let index in ar1) {
    count1++
}
console.log(count1)
console.log(ar1)



//console.log(arr.length)


//[0,1,2,3]

let num = [100,0,1,2,3,9]
console.log(num)
console.log(num[2])
console.log(num.indexOf(3))        //4
console.log(num.indexOf(100))     //0
console.log(num.indexOf(7))       //-1

//indexOf is used to find the index of a particular element in a array 
//if the value is not present then it will return -1


//includes    //true or false


console.log(num[2])
console.log(num.includes(3))        
console.log(num.includes(0))     
console.log(num.includes(1)) 


//lastIndexOf  --  returns the last occurrence of a specified element
// If the element is found, it returns its index.
// If the element is not found, it returns -1.

//array.lastIndexOf(element)
let arr2 = [10, 20, 30, 20, 20]
let index = arr2.lastIndexOf(20)
console.log(index)


let num1 = [100,1,2,3,45]
console.log(num1)
console.log(num1.length)
num1.splice(0,num1.length)  // making array length to 0

console.log(num1.length)

num1.length = 0
console.log(num1.length) 



//splice 

//num1.splice(0,5)
num1.splice(0,arr.length) 

console.log(num1)

//making array length to 0

//Assign empty array



//combine 2 arrays


//concat
var a = [1,2,3,4]
var b = ["a","b","c","d"]
console.log(a,b)
var c = a.concat(b)
console.log(c)

//spread operator

var d = [...a,...b]
console.log(d)
//console.log(...a,...b)


// for(k of d){
//     console.log(k)
// }

//Create and initialize arrays

let fruits = ["Apple", "Orange", "Mango"]
console.log(fruits)

//using new array
let numbers = new Array(10,20,30)
console.log(numbers)

//empty array 
let arr1 = []
arr1[0]="html"
arr1[1]="css"
console.log(arr1)


//Access Array Elements Using Indexes
let colors = ["Red", "Green", "Blue"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);


// /Update an Array Element
let fruits1 = ["Apple", "Banana", "Mango"];
fruits1[1] = "Orange";
console.log(fruits1);


//Find Array Length
let fruits2 = ["Apple", "Banana", "Mango"];
console.log(fruits2.length);





//Adding Elements to Arrays
//push() – Add at the End

let numbers1 = [1, 2, 3];
numbers1.push(4);
console.log(numbers1);


//unshift() – Add at the Beginning
let numbers4 = [2, 3];
numbers4.unshift(1);
console.log(numbers4);


//splice() – Add at a Specific Position

let colors1 = ["Red", "Blue"];
colors.splice(1, 0, "Green");
console.log(colors1);


//Removing Elements from Arrays
//pop() – Remove Last Element
let fruits3 = ["Apple", "Banana", "Mango"]
fruits3.pop()
console.log(fruits3)

//shift() – Remove First Element
fruits.shift()
console.log(fruits)


//Find Array Length
let fr = ["Apple", "Banana", "Mango", "Orange"]
console.log(fr.length)

//Find Element Position
let colors2 = ["Red", "Green", "Blue"]
console.log(colors2[0])
console.log(colors2[1])
console.log(colors2[2])

//includes() Method
let frui= ["Apple", "Banana", "Mango"]
console.log(frui.includes("Banana"))

//Different Ways to Empty an Array
let arr9 = [10, 20, 30, 40]

//Set Length to 0 
arr9.length = 0
console.log(arr9)

//Assign a New Empty Array
arr9 = []
console.log(arr9)

//Use splice()
let arr11 = [10, 20, 30, 40]
arr11.splice(0, arr11.length)
console.log(arr11)

// Loop Through Arrays Using for
let fruits11 = ["Apple", "Banana", "Mango"]
for (let i = 0; i < fruits11.length; i++) { //i starts with 0
    console.log(fruits11[i])     //access element by index
}

//Loop Through Arrays Using for...of
let g = ["Apple", "Banana", "Mango"]
for (let fruit of g) {
    console.log(fruit)
}

//Loop Through Arrays Using forEach()
let f = ["Apple", "Banana", "Mango"]
f.forEach(function(fruit) {
    console.log(fruit);
})




let k = [10,20,30,40]
let sum=0
for(let i=0;i<k.length;i++){
    sum += k[i]
}
console.log(sum)
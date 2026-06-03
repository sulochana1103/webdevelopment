var s="string"
var n=1
var b=true
var u
var k=null
console.log(s,typeof(s))
console.log(n,typeof(n))
console.log(b,typeof(b))
console.log(u,typeof(u))
console.log(k,typeof(k)) 


var b = 10n
console.log(b,typeof(b))


//reference datatypes -- multiple values can show single memory

// Object
// arrays
// functions
// E.S-6 2015 (map, WeakMap, set, weakset)
// Date
// Regular Expression


//Object 
//Collection of key value pairs
//each key and value will be seperated by :
//each key value pair will be seperated by ,

var obj={name:"sulochana",role:"lead",city:"Hyd",number:8888787878,male:true,salary:80000,attendence:{jan:20,feb:20},arr:[33,44,55]}
console.log(obj)
var a={}
console.log(typeof(obj))




//arrays

var arr=[1,2,3,4,"hello","hai",true,false,null,[1,2,34,44454,[23,34,33]],{name:"sulochana"}]
console.log(arr)


//functions
//function is a block of code which is used to do some task and return some value

function Hello(){
    console.log("hai how are you?")
}
Hello()
console.log("hai")

//calculation of salary based on number of working days

console.log(2000*20)
console.log(2000*19)
console.log(2000*21)

function salary(name,days){ //parameters
    var perday=2000
     console.log("monthly salary of ",name,"is",perday*days)
    //console.log(perday*days)
     console.log("Execution completed")
    return perday*days
   
}
salary("naresh",20) //arguments
console.log(salary("vamsi",23))


console.log("all the salaries are calculated")

// Employee Bonus Calculator

function bonus(name, salary){
    var bonusAmount = 5000
    console.log("Bonus for", name, "is", salary + bonusAmount)
    return salary + bonusAmount
}
bonus("Rahul", 50000)
console.log(bonus("Anu", 70000))


//student marks calculator

function marks(student,sub1,sub2){
    var total = sub1+sub2 
    console.log("Total marks of",student, "is", total)
    return total 
}
marks("prasad",33,44)
console.log(marks("priya",44,55))

//Electricity Bill Calculator

function bill(name, units){
    var costPerUnit = 10
    console.log("Electricity bill of", name, "is", units * costPerUnit)
    return units * costPerUnit
}
bill("Ramesh", 120)
console.log(bill("Suresh", 150))


//Product Price Calculator

function product(productName, quantity){
    var price = 500
    console.log("Total price of", productName, "is", quantity * price)
    return quantity * price
}
product("Shoes", 2)
console.log(product("Bag", 3))

// /Movie Ticket Calculator
function tickets(name, count){
    var ticketPrice = 250
    console.log("Total ticket price for", name, "is", count * ticketPrice)
    return count * ticketPrice
}
tickets("Arjun", 4)
console.log(tickets("Vijay", 2))




var a=10          //10
var abc=30        //30
var name = "sulochana"      //sulochana
var bool = true             //true
var k                       //undefined
var m=null                  //null
console.log(abc)
console.log(a) 
console.log(name) 
console.log(bool) 
console.log(k) 
console.log(m)

//type of operator
console.log(typeof(a))     //number
console.log(typeof(abc))    //number
console.log(typeof(name))   //string 
console.log(typeof(bool))    //boolean 
console.log(typeof(k))       //undefined
console.log(typeof(m))       //object 



function checkName() {
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("Enter your name");
    }else{
        alert("Form Submitted");
    }
}


let firstname = prompt("enter your name")
if(firstname == ""){
    alert("please enter your name")
}else{
    alert("form submitted")
}

let password = prompt("enter password")
if(password.length<6){
    alert("password must be at 6 charecters")
}else{
    alert("valid password")
}


var name = "sulochana"
let age = 24
const city = "hyderabad"
let bool1 = true 

console.log(name)
console.log(age)
console.log(city)
console.log(bool1) 


let company = "nyb infotech" 
function employee(){
    let name = "sulochana"  
    console.log(name) 
    console.log(company) 
}
employee() 

console.log(company) 



//data types
//primitive data types 
//reference data types 

//primitive data types
//string "" '' ``
//number 
//boolean 
//undefined 
//null 
//big int 
//symbol 


var string = "hello"
var k ='hello'
var m = `hello`
var r = string
console.log(r) 
var sulochana = "hi" 
console.log(sulochana) 
console.log(k,typeof(k))
console.log("value of m:",m,typeof(m))
console.log(string,typeof(string)) 


let name1 = "Sulochana";     
console.log(name1);


let name2 = "Sulochana";     
let age1 = 25;               
let isEmployee = true;      
let city1;                   
let salary = null;          
let bigNumber = 123456789n; 
console.log(name2);
console.log(age1);
console.log(isEmployee);
console.log(city1);
console.log(salary);
console.log(bigNumber);


let studentName = "sulochana";
let marks = 85;
let passed = true;
console.log("Name:", studentName);
console.log("Marks:", marks);
console.log("Passed:", passed);


let name4 = "Sulochana";
let age2 = 25;
let isStudent = true;
let city2;
let salary1 = null;
console.log(typeof(name4));
console.log(typeof(age2));
console.log(typeof(isStudent));
console.log(typeof(city2));
console.log(typeof(salary1));

//typeof 

//number  

//var 9 = "90" 

// = assignment operator it will assign the right side value to the left side variable
//rules for writing the variable names 
//it should start with character (alphabet) or _
//it should not start with number 
//it should not contain white space 
//A keyword cannot be used as the name of a variable

//console.log(9) 


var M="90"
console.log(M) 
console.log(typeof(M))

//boolean((True/false))


//errors
//1.syntax error
//2.reference error

var a = true 
console.log(a)

var b = false
console.log(b)


//referenceError False is not defined 

//undefined 

var Ab 
console.log(Ab)  

//null 

//var N = Null 
var True = null 
console.log(True)  
//console.log(N) 



var s = "string" 
var n = 1 
var b = true 
var u 
var k = null 
console.log(s,typeof(s))          //string
console.log(n,typeof(n))          //number
console.log(u),typeof((u))        //undefined  
console.log(k,typeof(k))        //object 

var b = 10n 
console.log(b,typeof(b))


//reference datatypes 

//object 
//arrays 
//functions 
//E.S-6 2015(map, weakmap, set, weak set) --- javascript is developed by es6
//Date 
//regular experssion 


//objects 
//collection of key value pairs 
//each key and value will be separated by :
//each key value pair will be seperated by ,

//we can store any kind of data in objects


var obj = {name:"sulochana", role:"lead", number:9438458584449, female:true, salary:800000, attendence:{jan:20, feb:20}} 
console.log(obj)
var a = {}
console.log(typeof(obj))


//arrays - homogenuous and heterogenous data is stored

var arr = [1,2,3,4,"hello","hai",true,false,null,[1,2,34,43,45333]]
console.log(arr)


//functions
//function is a block of code which is use to do some task and return some value 

function Hello(){
    console.log("hai! how are you?")
}
Hello()
console.log("hai")


//calculation of salary based on number of working days
console.log(2000*20)
console.log(2000*19)
console.log(2000*19)


function salary2(name,days){  //parameters
    var perday = 2000
    console.log("monthly salary of ",name, "is", perday*days)
    console.log("execution completed")
    return perday*days
    
}
salary2("naresh",20)  //arguments
salary2("vamsi",21)


console.log("all the salaries are calculated")


function salary2(name,days){  //parameters
    var perday = 2000
    console.log("monthly salary of ",name, "is", perday*days)
    console.log("execution completed")
    return perday*days
    
}
salary2("naresh",20)  //arguments
salary2("vamsi",20)



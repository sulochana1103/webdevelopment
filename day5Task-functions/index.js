//functions
//it is a block of code to do some task and return some value

function Hello(){ //parameters

}
Hello() //function calling
//values that can be passed at the time of function calling are called as arguments



function add(a,b){  //a,b are parameters
    console.log(a+b)  //3
    //return a+b 
}
//console.log(add(1,2)) //1,2 are arguments  //output (undefined)
let result = add(1,2)
console.log(result) //undefined


//this is called function declaration syntax
// function otp(){

// }

//email
// sulochana@nybinfotech.com   get otp
//mobile verification
//343432434323    get otp
//to change password
//to change mobile number
//to change email



//function can be declared in 2 ways
//1.function declaration
//2.function expression   //named function   //arrow function  //anonymous function    //arrow function


//function declaration
//function functionName(){

//}

//functionName() call the function


function Hello(a=0,b=10){  //parameters
    console.log(a,b)
}
Hello(1,undefined)

//arguments will have high priority than parameters
//default parameter ?

//varying in number of parameters and arguments


function varying(a=10,b,c,d,...f){
    console.log(a,b,c,d)
    console.log(arguments)
    console.log(f)
}
//rest parameter and argument objects
varying(undefined,1,2,3,45,6,7,8,9,10)


//Create functions with and without parameters
//Addition Using Parameters
function add(a, b) {
    console.log(a + b);
}
add(10, 20);


//without parameters
function add() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}
add();


//Practice passing arguments and using default parameters

function add(a, b) {
    console.log(a + b);
}
add(10, 20);

//default value
function add(a, b = 10) {
    console.log(a + b);
}
add(5);




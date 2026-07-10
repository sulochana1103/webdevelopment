//Conditional Statements
//1)if
//2)if else
    //3)else if else
        //4)switch

//Ternary ? :


//Syntax
// if(condition){

// }


// function hello(){

// }



function checkEligibility(age){
    if(age>18){
    console.log("Eligible for vote")
}
}
let age=19
checkEligibility(age)


//truthy value and falsy value
if(true){
    console.log("truthy value")
}

if(false){
    console.log("truthy value")
}

if(1){
    console.log("truthy value")
}

if(0){
    console.log("truthy value")
}


// "" → falsy (empty string)
// " " → truthy (contains a space)
// 0 → falsy
// 1 → truthy



// false	    Falsy
// 0	        Falsy
// ""	        Falsy
// null	        Falsy
// undefined	Falsy
// NaN	        Falsy
// "hello"	    Truthy
// "0"	        Truthy
// 1	        Truthy
// []	        Truthy
// {}	        Truthy
// function(){}	Truthy



//ifelse
// if(condition){

// }
// else{

// }


if(true){
    console.log("true")
}
console.log("false")
console.log("hai")



if(false){
    console.log("true")
}
console.log("false")
console.log("hai")



let a=9
if(a>0 && a%2==0){
    console.log("Positive number")
}


//90-100  10
//80-90    9
//.....

let marks = 78
if(marks>90){
    console.log("Agrade")
}
else if(marks>80){
    console.log("B grade")
}
else if(marks>70){
    console.log("C grade")
}
else{
    
}



var k
console.log(k)      //undefined



//NaN (not a number)
//0

var M="0"
if(0){
    console.log("zero is true")
}
else{
    console.log("false value")
}





//switch  -- it gives exact value
//step value    1-10,11-20, 21-30, 31-40(if else if else)
//exact value   1,10,15 (switch)

//syntax
// switch(key){
//     case value:

//     break;

//     default:
//         break;
// }
// switch(valuetocheck){
//     case value:
//         --------------
//         ------------
//         ------
//         break;
//         case value2:
//             -------------
//             ------------
//             break;
//             case value3:
//                 -----------
//                 ------------
//                 default:
                    
// }


var grade = 10
switch(grade){
    case 10:
        console.log("excellent")
        case 9:
            console.log("good")
            case 8:
                console.log("average")
}



var grade = 8
switch(grade){
    case 10:
        console.log("excellent")
        case 9:
            console.log("good")
            case 8:
                console.log("average")
}



var grade = 10
switch(grade){
    case 10:
        console.log("excellent")
        break;
        case 9:
            console.log("good")
            break;
            case 8:
                console.log("average")
}




function grades(g){
    switch(g){
    case 10:
        console.log("excellent")
        break;
        case 9:
            console.log("good")
            break;
            case 8:
                console.log("average")
}
}
var gradeA=9
grades(gradeA)
var gradeB = 10
grades(gradeB)




//ternary operator

// condition? true case : false case 
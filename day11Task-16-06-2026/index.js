// //constructor

// function employee(a,b,c){
//     this.name=a;
//     this.role=b;
//     this.dept=c;
// }
// let emp1=new employee("sulochana","ASE","IT")
// let emp2=new employee("priya","ASE","IT")
// console.log(emp1)
// console.log(emp2)



// //emp1("sulochana","ASE","IT")


// //class

// class e {
//     constructor(a,b,c){
//         this.name=a;
//         this.role=b;
//         this.dept=c;
//     }
// }
// var s=new e("sulochana","ASE","IT")
// console.log(s)


// //coping of objects
// //for coping an object we have 3 different ways
// //1.normal copy
// //2.deep copy
// //3.shallow copy


// var obj={a:"one",b:"two",c:"three",obj:{a:"Hello",b:"hai"}}

// //normal copy
// var obj1=obj
// console.log(obj)
// console.log(obj1)
// obj.a="a"
// obj1.d="four"
// console.log(obj1)
// console.log(obj)


// //shallow copy  with the help of spread operator
// var original={a:"one",b:"two",c:"three",obj:{a:"Hello",b:"hai"}}

// var copy={...original}


// copy.name="Hello"
// copy.obj.a="Good morning"
// original.k="bye"
// console.log("copy",copy)
// console.log("original",original)

// //for primitive data types will not change reference data types will changes



// //deep copy   JSON.parse  and JSON.stringify
// var copy1 = JSON.parse(JSON.stringify(original))
// console.log("copy",copy1)
// copy1.one="bye"
// copy1.obj.a="Hai"
// console.log("copy",copy1)
// console.log("orginal",original)


// //copying of arrays

// var arr=[923,232,44,12,[10,391,3231]]

// //normal copy
// var copy=arr
// //console.log(arr[4][0])
// console.log("arr",arr)
// arr[0]=10
// console.log("copy",copy)

// //shallow copy
// var copy1 = [...arr]
// copy1[0]=99999
// copy1[4]
// console.log("original",arr)
// console.log("copy",copy1)



// //deep copy
// var copy2=JSON.parse(JSON.stringify(arr))

// console.log(copy2)

// copy2[4][0]="hello"
// console.log(copy2)
// console.log(arr)



// //for in


// //object.keys
// //object.value
// //object.entities

// //in how many ways are there to copy 


// //normal copy in primitive data type
// let a=10;
// let b=a; //copy value
// b=20;
// console.log(a);//10
// console.log(b); //20

// let name1="sulochana";
// let name2=name1;
// name2="nirmala";
// console.log(name1);//sulochana
// console.log(name2);//nirmala
// //pdt are copied by value.

// //reference data type
// let obj11={
//     name:"john"
// }
// let obj2=obj11;
// obj2.name="sulochana"
// console.log(obj11.name);//sulochana
// console.log(obj2.name);//sulochana

// //normal copy
// let original={
//     name:"nirmala",
//     age:30
// }
// console.log(original)
// let copy=original;
// console.log(copy);//30
// copy.age=31;
// console.log(original.age); //31
// console.log(copy.age);//31
//Deep copy
// let original={
//     name:"nirmala",
//     age:30,
//     job:{
//         role:"Developer",
//         salary:90000
//     },
//     arr:[1,2,4]
// }
// let copy=JSON.parse(JSON.stringify(original))
// copy.name="sulochana";
// copy.job.salary=100000;
// copy.arr[0]=10;
// original.arr[1]=30;
// console.log(original)
// console.log(copy)
//shallow copy
let original={
    name:"nirmala",
    age:30,
    job:{
        role:"Developer",
        salary:90000
    },
    arr:[1,2,4]
}
let copy={...original}
copy.age=31;
copy.job.role="Tester";
console.log(original);
console.log(copy);


let original11 = {
    name: "Emma",
    age: 22
};
// Spread operator
let copy1 = { ...original11 };
// Object.assign()
let copy2 = Object.assign({}, original11);
copy1.age = 30;
copy2.name = "sulochana";
console.log(original11);
console.log(copy1);
console.log(copy2);
let today = new Date() 
console.log(today)


//map
//the data will be stored in key value pairs and key can be of any datatype

// var m = {name:"sulochana",1:"date"}
// console.log(m)
// var l = new Map()
// l.set("name","sulochana")
// l.set(1,"date")
// l.set(true,"value")
// console.log(l) 
//map
let employee=new Map();
 employee.set("name","Sulochana");//string data type
 employee.set(101,"empno");//number
 employee.set(true,"presenet");//boolean
 console.log(employee); //we can findout how many values we stored
 //get
 console.log(employee.get("name"))
 //has -if value present or not we need to check with has
 console.log(employee.has(101));
//how to find out size of map 
console.log(employee.size)
//using javascript dom can be manipulated

//set 
var s=new Set()
s.add(1)
s.add(2)
s.add(3)
s.add(4)
s.add(1)
s.add(2)
console.log(s)
console.log(s.size)
console.log(s.has(1))
//s.clear()
s.delete(1)
console.log(s)
//if you want to clear all elements we need to use clear
s.clear()
console.log(s)
//weak map
// let wm=new WeakMap();
// let obj1={name:"sulochana"}
// let obj2={name:"nirmala"}

// wm.set(obj1,"Developer");
// wm.set(obj1,"101");
// wm.set(obj2,"engineer");   //5 functions applicable(set,get,has delete,clear)
// console.log(wm.get(obj1))
// console.log(wm.has(obj1))
// console.log(wm.get(obj2))
// console.log(wm.has(obj2))
// obj2=null;
// console.log(wm.get(obj2));
//weak set
let ws=new WeakSet()
let employee1={
    name:"sulochana"
}
let employee2={
    name:"nirmala"
}
ws.add(employee1);     //3 functions only applicable(add,has,delete)
ws.add(employee2);
console.log(ws.has(employee1));
ws.delete(employee1);
console.log(ws.has(employee1));



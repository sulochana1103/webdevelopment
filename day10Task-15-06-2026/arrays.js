//how to loop in arrays

//purpose of for in and for of
//for in
//used to iterate over properties (keys)
//returns the index/key
//on objects for in only applicable for of wont applicable

//for of
//if we use for in on arrays we get index values 
//if we use for in on objects we get keys.



var arr=[1,2,3,4]
for(i of arr){
    console.log(i)
}



// var arr=[1,2,3,4]
// for(i in arr){   //we get index values
//     console.log(i)
// }


for(i in arr){
     arr[i]=arr[i]+1
}
console.log(arr)



//testing the array
//some and every


console.log(arr.some(i=>i>1))  //we are applying some method we are testing the condition

//we can use every in the data in the employee attendance 
console.log(arr.every(i=>i>3))  //all conditions should satisfy

//join
console.log(arr.join(""))
console.log(arr.join(" "))
console.log(arr.join("-"))

//sort
let arr1 = [1,9,2,4,0,2,1,10,20]  //1D array
console.log(arr1)
arr1.sort()
console.log(arr1)

arr1.sort((a,b) => a-b)
console.log(arr1)


//without using sort sort the array
// let arr4=[3,4,5,6,7,8,7,6]
// for(let i=0;i<arr4.length;i++){
//     for(let j=i+1;j<arr4.length;j++){
//         if(arr4[i]>arr4[j]){
//             [arr4[i],arr4[j]]=[arr4[j],arr4[i]]
//         }
//     }
// }
// console.log(arr4)

//flattening of array
//let a = [1,2,3,4,[1,2,3[2,1,3],[12,3,4,5,64]]]   //3D array
let x= [1,2,3,[1,[2,31,413]]]
console.log(x.flat(1))
console.log(x.flat(2))

let s=[1,2,3,[[1,[2,32,413,[343,[321],32,1]]]]]
console.log(s.flat(Infinity))

//console.log(a,flat(Infinity))


//removing duplicates   we can use new set or indexOf for removing duplicates
var m = [1,2,3,4,5,6,1,2,3,33,89,99]
console.log(...new Set(m))

//indexOf()
var n=[]
for(i of m){
    if(n.indexOf(i)==-1){
        n.push(i)
    }
}
console.log(n)


//map filter and reduce
//for loping we use map
//reduce -- single value is reduced

var arr2=[1,2,3,4]
console.log(arr2.map(i=>i+1))
console.log(arr2.map(i=>i*i))

console.log(m.filter(i=>i>3))

//for each
//both index value and value will return

m1=[12,33,22,2,3,4,5,11,6,7,33,8,98]
m1.forEach((i,j)=>{
    console.log(i,j)
    //console.log(j)
})



//reduce
let arrm = [1,2,3,4,5]
console.log(arrm.reduce((i,j)=>i+j,0))    //15


//difference between map,filter and reduce
//map and filter returns an array
//reduce returns single value




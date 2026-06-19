//synchronous execution --  line by line execution is executed



//Asynchronous 
console.log("one")


setTimeout(()=>{
    console.log("Two 1")
},1000)


setTimeout(()=>{
    console.log("Two")
},0)

//milli seconds 1s = 100ms
// console.log("two")


console.log("three")

let sum=0
for(i=0;i<1000;i++){
    sum+=i
}
console.log(sum)


//setinterval()
let a = setInterval(()=>{
    console.log("Four")
},3000)


//clearinterval()

clearInterval(a)



//event bubbling  --  event travels from child element to parent element
//event capturing    ---  event travels from parent to child element
//event deligation  ---  event will be added to the parent element and the event will be used by all the child elements


let child = document.getElementById("innertext")
function action(){
    console.log("inner h1 clicked")
}
child.addEventListener("click",action)



let parent = document.getElementById("outertext")
function action1(){
    console.log("outer text")
}
parent.addEventListener("click",action1,true)



let div = document.getElementById("div")
function action2(){
    console.log("Parent element")
}
div.addEventListener("click",action2)




let parent1 = document.getElementById("outertext")
function action1(){
    console.log("outer text")
}
parent1.addEventListener("click",action1)




let div1=document.getElementById("div1")
function action3(){
    console.log("Top parent clicked")
}
div1.addEventListener("click",action3,true)




let list =document.getElementById("list")
function listclick(){
    console.log("clicked")
}
list.addEventListener("click",function (e){
    console.log(e.target.innerText)
})



console.log(window)




console.log("Start");
setTimeout(function () {
    console.log("Hello")
}, 2000)
console.log("End")



setTimeout(function () {
    console.log("Hello")
}, 3000)


setInterval(function () {
    console.log("Hi")
}, 1000)




let timer = setTimeout(function () {
    console.log("Hello")
}, 5000)
clearTimeout(timer)


function changeText() {
    document.getElementById("title").innerHTML = "Welcome";
}


function changeColor() {
    document.body.style.backgroundColor = "yellow";
}



console.log("Start")
setTimeout(function () {
    console.log("Hello")
}, 1000)

console.log("End")







//Event Bubbling  --  event travels from child element to parent element
//Event Capturing  --  event travels from parent to child element
//Event Deligation  --  event will be added to the parent element and the event will be used by all the child elements



let child=document.getElementById("innertext")
function action(){
    console.log("inner h1 clicked")
}
child.addEventListener("click",action)





let div= document.getElementById("div")
function action2(){
    console.log("parent element")
}
div.addEventListener("click",action2)



let parent = document.getElementById("outertext")
function action1(){
    console.log("outertext")
}
parent.addEventListener("click",action1,true)


let div1=document.getElementById("div1")
function action3(){
    console.log("Top parent clicked")
}
div1.addEventListener("click",action3,true)



let list=document.getElementById("list")
function listclick(){
    console.log("clicked")
}
list.addEventListener("click",function (e){
    console.log(e.target.innerText)
})


console.log(window)


//Normal Event

//Throttling

//Debouncing

//Normal Event
let button = document.getElementById("button")
let a = 0
button.addEventListener("click",function (){
    a+=1
    console.log("value of a",a)
    console.log("Button clicked")
})

//Throttling
let lastclick=0
let b=0
button.addEventListener("click",function (){
    let current = Date.now()
    if(current-lastclick>2000){
        b+=1
        console.log("value of b ",b)
        lastclick=current
    }
    console.log("Button clicked")
})


//Debouncing
let c= 0
let t 
let d=0
button.addEventListener("click",function(){
    clearTimeout()
    t=setTimeout(function(){
        d+=1
        console.log("value of d  is ",d)
    },2000)
    
})


//callback function
function function1(s){
    console.log(s)
}
function one(a,b,c){
    console.log("function one is executed")
    c(a+b)
}
one(1,2,function1)




//promise
//resolve,reject
let p = new Promise((resolve,reject) => {
    let status=false
    if(status){
        console.log("Resolved")
        //resolve("true")
    }
    else{
        console.log("Reject")
        //reject("error")
    }
})


//.then  //success case resolve

//.catch    //failure   //reject




//pending   resolve/reject



//Practice common browser events such as click, input, submit, and change
// click Event --- The click event occurs when the user clicks an element

let a1=document.getElementById("btn")

a1.addEventListener("click",function action3(){
    alert("Button clicked!")
})


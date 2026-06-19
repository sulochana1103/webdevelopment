//Dom
//Document Object Model

//it will attach the document in the form of a tree structure


//HTML 
//Head(Meta Tags), Body header(nav) section(heading tags) footer(links.....) (content)

//reading dom properties

//selecting dom element

//getElementById()     //single element with that id 

//getElementByClassName   //in the form of an array []

//getElementByTagName    //

//querySelector          //

//querySelectorAll


console.log(document) 

let h1 = document.getElementById("heading")
let h4 = document.getElementById("text")
console.log(h4)
console.log(h1)

let c = document.getElementsByClassName("h1")
console.log(c)


let E = document.getElementsByTagName("h1")
console.log(E)

//Dom trsversing
//parentElement
//childern
//firstElementChild
//lastElementChild


let q = document.querySelector(".text")
console.log(q)
let q1= document.querySelectorAll("#text")
console.log(q1)



let name=document.getElementById("name")
console.log(name)
let parentElement = name.parentElement
console.log(parentElement)
//console.log(name.childern)
console.log(parentElement.childern) 
console.log(parentElement.firstElementChild)



console.log(parentElement.lastElementChild)


//creating a DOM element

let newElement = document.createElement('h1')
newElement.innerText = "New Element created"
console.log(newElement)

parentElement.appendChild(newElement) 

//prepend
parentElement.prepend(newElement)



let btn=document.getElementById('btn')
console.log(btn) 
// btn.onclick=function(){
//     alert('Button Clicked')
//     alert("button Clicked")
// }

function click(){
    //alert("Button Clicked")
    btn.innerText="Button Clicked"
}

btn.addEventListener("click",click)


//addEventListener 
btn.addEventListener("click",function(){
    alert("Button Clicked")
})


//types of eventListerners

//querySelector()
const first = document.querySelector(".text");
console.log(first.textContent);   


// /querySelectorAll()
const elements = document.querySelectorAll(".text")
elements.forEach(item => {
    console.log(item.textContent)
})


const container = document.getElementById("container")
const heading = document.createElement("h2")
heading.textContent = "New Heading"
container.appendChild(heading)


const button = document.getElementById("btn")
button.addEventListener("click", function () {
    alert("Button clicked!")
})


const button1 = document.getElementById("doubleBtn")
button1.addEventListener("dblclick", () => {
    console.log("Button double-clicked")
})

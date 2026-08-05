import "./style.css";

import product from "../product";

import laptop from "../images/laptop.png";

const root = document.getElementById("root");

root.innerHTML = `

<div class="card">

<img src="${laptop}">

<h2>${product.name}</h2>

<h3>${product.price}</h3>

<p>${product.description}</p>

<button>Add To Cart</button>

</div>

`;
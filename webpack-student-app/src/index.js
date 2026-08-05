import "./style.css";

import student from "./student";

const root = document.getElementById("root");

root.innerHTML = `

<div class="card">

<h2>Student Details</h2>

<p><b>Name:</b> ${student.name}</p>

<p><b>Course:</b> ${student.course}</p>

<p><b>City:</b> ${student.city}</p>

</div>

`;
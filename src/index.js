//document.addEventListener("DOMContentLoaded", () => {
let btn = document.getElementById("submitData");

btn.addEventListener("click", (e)=>{
e.preventDefault();
let data = document.getElementById("new-task-description").value;
buildToDo(data)

});

function buildToDo(todo){
let p = document.createElement("p");
let btn = document.createElement("button");
btn.addEventListener('click', handledelete)
btn.textContent =  "x";
p.textContent = `${todo}`
p.appendChild(btn)
console.log(p);
document.querySelector("#list").appendChild(p);
}
function handledelete(e){
  e.target.parentNode.remove()
}


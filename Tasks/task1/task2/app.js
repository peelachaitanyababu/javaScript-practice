let button = document.createElement("button");
button.setAttribute("onClick", "bt()");
console.log(button);
let context = document.createElement("data");
context.innerText = "Blue";
button.appendChild(context);
document.body.appendChild(button);

function bt() {
  document.body.style.backgroundColor = "orange";
}

let button = document.createElement("button");
button.innerText = "Click me";
button.setAttribute("onClick", "bt()");
document.body.append(button);
function bt() {
  document.body.classList.toggle("bgcolor");
}

let button = document.createElement("button");
button.setAttribute("onClick", "bt1()");
//let bt = document.createElement("bt");
button.innerText = "Blue";
button.style.backgroundColor = "blue";

let button1 = document.createElement("button");
button1.setAttribute("onClick", "bt2()");
button1.innerText = "red";
button1.style.backgroundColor = "red";
let button2 = document.createElement("button");
button2.setAttribute("onClick", "bt3()");
button2.innerText = "orange";
button2.style.backgroundColor = "orange";

let button3 = document.createElement("button");
button3.setAttribute("onClick", "bt4()");
button3.innerText = "green";
button3.style.backgroundColor = "green";

let button4 = document.createElement("button");
button4.setAttribute("onClick", "bt5()");
button4.innerText = "yellow";
document.body.append(button4, button, button1, button2, button3);
button4.style.backgroundColor = "yellow";

function bt1() {
  document.body.style.backgroundColor = "blue";
}
function bt2() {
  document.body.style.backgroundColor = "red";
}
function bt3() {
  document.body.style.backgroundColor = "orange";
}
function bt4() {
  document.body.style.backgroundColor = "green";
}
function bt5() {
  document.body.style.backgroundColor = "yellow";
}

let a = document.getElementById("sp");
setInterval(() => {
  let date = new Date();
  a.innerHTML = date.toLocaleTimeString();
}, 1000);

// let value = document.getElementById("r");
// setInterval(() => {
//   value.style.backgroundColor = "red";
// }, 1000);

// let value2 = document.getElementById("y");
// setInterval(() => {
//   value2.style.backgroundColor = "yellow";
// }, 2000);

// let value3 = document.getElementById("g");
// setInterval(() => {
//   value3.style.backgroundColor = "green";
// }, 3000);

let value1 = document.getElementById("r");
let value2 = document.getElementById("y");
let value3 = document.getElementById("g");
function traffic() {
  value3.style.backgroundColor = "white";
  value1.style.backgroundColor = "red";
  setTimeout(() => {
    value1.style.backgroundColor = "white";
    value2.style.backgroundColor = "yellow";
  }, 1000);

  setTimeout(() => {
    value2.style.backgroundColor = "white";
    value3.style.backgroundColor = "green";
  }, 2000);
  setTimeout(traffic, 3000);
}
traffic();
// Start a timeout
const timeoutId = setTimeout(() => {
  console.log("This will run after 5 seconds unless stopped.");
  alert("Timeout finished!");
}, 5000);

// Stop the timeout when the button is clicked
document.getElementById("click").addEventListener("click", () => {
  clearTimeout(timeoutId);
  console.log("Timeout canceled.");
  alert("Timeout canceled!");
});

let val = 10;
let val2 = document.getElementById("p");
while (val != 0) {
  val2.innerText += `${val} \n`;

  val--;
}

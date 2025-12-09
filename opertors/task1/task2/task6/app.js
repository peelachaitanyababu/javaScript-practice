let darkmode = document.createElement("button");
darkmode.innerText = "DarkMode";
darkmode.setAttribute("onClick", "dk()");

let lightmode = document.createElement("button");
lightmode.innerText = "light mode";
lightmode.setAttribute("onClick", "lm()");

document.body.append(darkmode, lightmode);
function dk() {
  document.body.classList.add("bgp");
}
function lm() {
  document.body.classList.remove(" bgp");
}

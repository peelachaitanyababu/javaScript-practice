let a = document.getElementById("em");
let b = document.getElementById("ps");
let c = document.getElementById("sb");
let d = document.getElementById("pp");

c.addEventListener("click", () => {
  if (
    a.value === localStorage.getItem("Email") &&
    b.value === localStorage.getItem("pasword")
  ) {
    window.location.href = "./home.html";
  } else {
    d.innerText = "Invalid data";
  }
});

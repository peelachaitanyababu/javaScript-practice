let a = document.getElementById("em");
let b = document.getElementById("ps");
let c = document.getElementById("sb");
let d = document.getElementById("pp");
c.addEventListener("click", () => {
  if (a.value == "" || b.value == "") {
    d.innerText = "We requireed tw datas";
  } else {
    localStorage.setItem("Email", a.value);
    localStorage.setItem("pasword", b.value);
    window.location.href = "./login.html";
  }
});
// localStorage.setItem("Email", a.value);
// localStorage.setItem("pasword", b.value);

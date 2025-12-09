let vv = document.getElementById("fs");
vv.addEventListener("focus", (Event) => {
  vv.style.borderColor = "orange";
});
vv.addEventListener("blur", (Event) => {
  vv.style.borderColor = "purple";
});

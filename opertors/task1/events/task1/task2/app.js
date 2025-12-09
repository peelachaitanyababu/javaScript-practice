let v = document.getElementById("hi");
v.addEventListener("focus", (event) => {
  v.value = v.value.toUpperCase();
});
v.addEventListener("blur", (Event) => {
  v.value = v.value.toLowerCase();
});

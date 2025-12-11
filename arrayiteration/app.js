let data = [
  {
    name: "Bike",
    des: " These is used to transportation",
    price: 3000,
  },
  {
    name: "Bike",
    des: " These is used to transportation",
    price: 3000,
  },
  {
    name: "Bike",
    des: " These is used to transportation",
    price: 3000,
  },
  {
    name: "Bike",
    des: " These is used to transportation",
    price: 3000,
  },
  {
    name: "Bike",
    des: " These is used to transportation",
    price: 3000,
  },
  {
    name: "Bike",
    des: " These is used to transportation",
    price: 3000,
  },
  {
    name: "Bike",
    des: " These is used to transportation",
    price: 3000,
  },
  {
    name: "Bike",
    des: " These is used to transportation",
    price: 3000,
  },
  {
    name: "Bike",
    des: " These is used to transportation",
    price: 3000,
  },
  {
    name: "Bike",
    des: " These is used to transportation",
    price: 3000,
  },
];
let dd = document.getElementById("d1");
// dd.innerHTML = "sai";
data.forEach((a) => {
  // dd.innerHTML += "Sai";
  dd.innerHTML += `<div class="card"><h1>${a.name}</h1><p>${a.des}</p><h3><mark>${a.price}</mark></h3></div>`;
});

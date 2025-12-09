let card = document.createElement("div");
card.setAttribute("class", "card");
console.log(card);

let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?fm=jpg&q=60&w=600"
);
console.log(img);

let caption = document.createElement("p");
caption.innerHTML = `<h1> These is my car </h1>`;
console.log(caption);
let details = document.createElement("p");
details.innerText = "These is the brand of the power mustang";
console.log(details);
let button = document.createElement("button");
button.innerText = "Clik me";
console.log(button);

card.appendChild(img);
card.appendChild(caption);
card.appendChild(details);
card.appendChild(button);

document.body.appendChild(card);
console.log(card);

card.style.border = "2";
card.style.backgroundColor = "orange";
card.style.padding = "10";
card.style.width = "30%";
img.style.width = "90%";
img.style.margin = "5%";
caption.style.textAlign = "center";
details.style.textAlign = "center";
button.style.marginLeft = "40%";
card.style.borderStyle = "solid";
card.style.borderColor = "red";

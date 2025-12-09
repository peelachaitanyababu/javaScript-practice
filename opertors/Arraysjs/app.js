// let arr = ["Chitanya ", "Sulthan", "saikumar"];
// arr.forEach((name) => console.log(name));
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (let i of arr) {
//   console.log(i);
// }

// let arr = ["Chaitanya", "Sulthan", "Saikumar"];

// arr.forEach(name => console.log(name));

// ***************************average sum of marks **********************************
let marks = [45, 87, 78, 90, 23, 56, 88, 99, 45];
let sum = 0;
for (let i of marks) {
  sum += i;
}
let avg = sum / marks.length;
console.log(`These is the average of the students ${avg}`);

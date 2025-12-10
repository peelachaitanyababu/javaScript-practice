// let value = Number(prompt("Enter the value of dise"));
// switch (value) {
//   case 1:
//     console.log("Value is 1");
//     break;
//   case 2:
//     console.log("value is 2");
//     break;
//   case 3:
//     console.log("value is 3");
//     break;
//   case 4:
//     console.log("value is 4");
//     break;
//   case 5:
//     console.log("value is 5");
//     break;
//   case 6:
//     console.log("value is 6");
//     break;
//   default:
//     console.log("invalid input ");
// }

// let value = Number(prompt("Enter the value "));
// if (value % 2 == 0) {
//   console.log("Even number ");
// } else {
//   console.log("Odd number");
// }
// if (value > 0) {
//   console.log("Postive number ");
// } else if (value < 0) {
//   console.log("Negative Number ");
// } else {
//   console.log("its Zero");
// }
// let value = Number(prompt("Enter the age "));
// if (value > 18) {
//   console.log("Right to vote  ");
// } else {
//   console.log("NOt elegible ");
// }
// for (let i = 0; i < 5; i++) {
//   console.log("count", i);
// }

//While loop

// let i = 0;
// while (5 > i) {
//   console.log("Bolo", i);
//   i++;
// }

//do while;

// let i = 0;
// do {
//   console.log("do loop", i);
//   i++;
// } while (i < 5);

// for in
// - Used for: Iterating over the keys (property names) of an object.
// - Works with: Objects and arrays (but not ideal for arrays).

// const person = { name: "Chaitanya", age: 22 };
// for (let key in person) {
//   console.log(key, ":", person[key]);
// }

//for of
// - Used for: Iterating over the values of iterable objects like arrays, strings, maps, etc.
// - Works with: Arrays, strings, sets, maps.

// const fruits = ["oragnge ", "mango", "apple ", "pineapple", "custerapple"];
// for (let fruit of fruits) {
//   console.log("fruits", fruit);
// }

//forEach loop
// nums=["chaithu","saikumar","sulthan","likitha","teja"];
// nums.foreach((num)
//   console.log(num);
// )

// const nums = [1, 2, 3];
// nums.forEach((num) => console.log("Num:", num));

// for (let i = 10; i > 1; i--) {
//   if (i == 5) continue;
//   console.log(i);
// }
// let a = "chaithu";
// console.log(`Welcome mr ${a}`);
// let i = 1;
// while (i < 10) {
//   i++;
//   if (i == 5) continue;
//   console.log(i);
// }
// let a = 0;
// do {
//   a++;
//   if (a == 5) continue;
//   console.log(a);
// } while (a < 10);
// function data(a, b) {
//   return a + b;
// }
// console.log(data("Boloo", "Chaithu"));
// console.log(data("Ganesh", "Ramsir"));
// let student = {
//   name: "chaithu",
//   age: 21,
//   gender: "male",
//   data: function () {
//     console.log(
//       "these is " + this.name + "age" + this.age + "geneder" + this.gender
//     );
//   },
// };
// student.data();
// console.log(student.data());
// console.log(add(2, 5));
// console.log(sub(10, 2));
// console.log(mul(10, 3));
// console.log(div(20, 4));
// console.log(mod(20, 4));
const student = {
  name: "Chaitnaya",
  age: 22,
  place: "Elure",
  Salary: 75000,
};
console.log(student);
console.log(student.name);
console.log(student["name"]);
console.log(student.age);
console.log(student["age"]);
student["name"] = "sulthan";
console.log(student.name);
console.log(student);
console.log(student.age);

"use strict";

/*
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const displayInfo = function (name, birthYear) {
  const age = calcAge2(birthYear);

  return `My name is ${name} and i'm ${age} years old`;
};

console.log(displayInfo("Saeed", 2006));
*/

/*
const displayInfo = function (person) {
  console.log(
    `My name is ${person.name} and i'm ${person.age} years old
     and my job is ${person.job}.`
  );
};

const narges = {
  name: "Narges",
  age: 18,
  job: "developer",

  showInfo: function () {
    console.log(
      `My name is ${this.name} and i'm ${this.age} years old
        and my job is ${this.job}.`
    );
  },
};
narges.showInfo();

displayInfo();

 displayInfo(narges);

 maryam.sports = ["football", "taekwondo"];
maryam["spor" + "ts"] = ["football", "taekwondo"];

 console.log([2, 3].includes());
*/

/*
// for (let i = 1; i <= 9; i++) {
//   console.log(`hello ${i}`);
// }

const divisibleBy3 = [];
const divisibleBy5 = [];
const divisibleBy3And5 = [];

// 1-45

for (let i = 1; i <= 45; i++) {
  if (i % 3 === 0) divisibleBy3.push(i);

  if (i % 5 === 0) divisibleBy5.push(i);

  if (i % 3 === 0 && i % 5 === 0) divisibleBy3And5.push(i);
}

console.log(divisibleBy3);
console.log(divisibleBy5);
console.log(divisibleBy3And5);
*/

/*
const array = ["maryam", 25, "cena", true, 22];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}
*/

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`day ${i}: walking ${j} step.`);
//   }
//   console.log("");
// }

// 1-5
// 6-10

/**
 * i=1, j
 * 1+6 , 1+7 , 1+8 , 1+9 , 1+10
 *
 * i=2, j
 * 2+6 , 2+7 , 2+8 , 2+9 , 2+10
 */

// for (let i = 1; i <= 2; i++) {
//   for (let j = 3; j <= 6; j++) {
//     console.log(`${i} + ${j} = ${i + j}`);
//   }

//   console.log("-----------------");
// }

console.log(Math.ceil(2.1));

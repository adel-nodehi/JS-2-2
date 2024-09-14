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

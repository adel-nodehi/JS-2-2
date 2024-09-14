const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const displayInfo = function (name, birthYear) {
  const age = calcAge2(birthYear);

  return `My name is ${name} and i'm ${age} years old`;
};

console.log(displayInfo("Saeed", 2006));

// Rör ej
const person = {
  firstName: "Oscar",
  lastName: "Nilsson",
  age: 30,
};

// Skriv klart funktionen som skriver ut mitt fulla namn
// OBS: Du får inte ändra funktions-parametrarna.
function printName(first, last) {
  // Skriv din kod här
  return `${first} ${last}`;
}

// Du kommer även behöva ändra anropet här nedan
// Inte helt säger om detta är det ni vill
console.log(printName(person.firstName, person.lastName)); // "Oscar Nilsson"
printName(person.firstName, person.lastName); // "Oscar Nilsson"

module.exports = printName;

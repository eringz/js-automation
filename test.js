const numbers = [-5, 0, 5, 10, 23, -10];

// Find all negative numbers
const negative = numbers.filter(number => number < 0).join(", ");

console.log(`Negative number: ${negative}.`);

const names = ["John", "Jone", "Alex", "Jane", "Max"];

// Find the first name that has 4 letters
const firstNameWith4Letters = names.find(name => name.length === 4);

console.log(firstNameWith4Letters);
console.log(names.findIndex(c => c.includes("a")));
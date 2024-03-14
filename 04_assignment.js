// Que 4. Generate n9mbers between any 2 given numbers.

const num1 = 10
const num2 = 25;
let result = Math.ceil(Math.random() * (num2 - num1)) + num1;
console.log(result);
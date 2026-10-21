const prompt = require('prompt-sync')();

let num1 = Number(prompt("Primer número: "));
let num2 = Number(prompt("Segon número: "));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacio = num1 * num2;
let divisio = num1 / num2;

console.log(`Suma = ${suma}`);
console.log(`Resta = ${resta}`);
console.log(`Multiplicació = ${multiplicacio}`);
console.log(`Divisió = ${divisio}`);
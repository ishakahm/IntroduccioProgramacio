const prompt = require('prompt-sync')();
// Decalarar les variables
let num = Number(prompt("Introdueix el teu primer número: "));
let num2 = Number(prompt("Introdueix el teu segon número: "));

let simbol = prompt("Introdueix la operacio (+, -, * o /): ");


if (simbol == "+") {
    console.log(Number(num) + Number(num2))
}   else if (simbol == "-") {
    console.log(Number(num) - Number(num2))
}   else if (simbol == "*") {
    console.log(Number(num) * Number(num2))
}   else if (simbol == "/" && num2 == 0) {
    console.log("No es pot dividir entre zero.")
}   else if (simbol == "/") {
    console.log(Number(num) / Number(num2))
}   else {
    console.log("Operació no vàlida.")
}


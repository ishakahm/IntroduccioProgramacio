const prompt = require("prompt-sync")();

let num = prompt("Introduzca un numero entre el 1-100: ")

if (num >= 1 && num <= 100) {
    console.log("Numero dentro del rango")
} else {
    console.log("Numero fuera de rango")
}

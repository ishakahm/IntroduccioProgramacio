const prompt = require("prompt-sync")();

console.log("-----------TAQUILLA-----------")
console.log("")
let edad = prompt("Por favor introduzca su edad: ")
let carnet = prompt("Tienes el carnet estudiantil? (si o no): ")
let preuNormal = 10
let preuDescompte = 6

if (edad < 18 || edad > 65 || carnet == "si") {
    console.log(`Tens el descompte, el preu a pagar es ${preuDescompte}€`)
} else {
    console.log(`No tens el descompte, el preu a pagar es ${preuNormal}€`)
}
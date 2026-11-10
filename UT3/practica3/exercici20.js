const prompt = require("prompt-sync")();

let edad = prompt("Pon tu edad: ")
let pass = prompt("Introduca si tiene entrada (si/no): ")
console.log("")
if (edad >= 18 && pass == "si") {
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}
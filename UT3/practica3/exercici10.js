const prompt = require('prompt-sync')();

let graus = Number(prompt("Introduce la temperatura en graus Celsius: "));

console.log("")
if (graus < 10) {
    console.log("Fa fred")
}   else if (graus < 25) {
    console.log("Temperatura moderada")
}   else if (graus >= 25) {
    console.log("Fa calor")
}

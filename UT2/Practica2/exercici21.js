const prompt = require('prompt-sync')();
let nom = prompt("Quina es el teu nom? ")
let edat = prompt("Quina edat tens? ")

console.log(`Hola ${nom}! Tens ${edat} anys`)
console.log(`L'any que ve en tendràs ${Number(edat) +1} anys`)



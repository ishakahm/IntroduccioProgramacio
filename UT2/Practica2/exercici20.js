const prompt = require('prompt-sync')();
let nom = prompt("Escriu algo? ")
console.log(`VALOR: ${nom}`)
console.log(`TIPO: ${typeof nom}`)
console.log(Boolean(nom))
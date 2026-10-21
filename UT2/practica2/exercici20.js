const prompt = require('prompt-sync')();
let nom = prompt("Escriu algo? ")
console.log(`VALOR: ${nom}`)
console.log(`TIPO: ${typeof nom}`)
console.log(Boolean(nom))
//Si escrius text, és una cadena no buida i Boolean() retorna true. 
// Si només prems Enter, retorna una cadena buida "" i Boolean("") retorna false

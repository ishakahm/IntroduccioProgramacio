const prompt = require('prompt-sync')();
 
let numero = Number(prompt("Introdueix un número: "));
 
if (numero === 7) {
  console.log("Has endevinat el número!");
} else {
  console.log("No has encertat. Torna-ho a provar!");
}
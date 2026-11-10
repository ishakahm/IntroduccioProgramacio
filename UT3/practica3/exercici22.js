
const prompt = require('prompt-sync')();
 
let numero = Number(prompt("Introdueix un número de l'1 al 7: "));
 
// Els casos 1-5 no tenen break entre ells, així que cauen en cascada fins al console.log
switch (numero) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Dia feiner");
    break;
  case 6:
  case 7:
    console.log("Cap de setmana");
    break;
  default:
    console.log("Dia no vàlid");
}
const prompt = require('prompt-sync')();
 
// Number() és necessari perquè switch compara amb ===
let numero = Number(prompt("Introdueix un número de l'1 al 7: "));
 
switch (numero) {
  case 1:
    console.log("Dilluns");
    break;
  case 2:
    console.log("Dimarts");
    break;
  case 3:
    console.log("Dimecres");
    break;
  case 4:
    console.log("Dijous");
    break;
  case 5:
    console.log("Divendres");
    break;
  case 6:
    console.log("Dissabte");
    break;
  case 7:
    console.log("Diumenge");
    break;
  default:
    console.log("Dia no vàlid");
}
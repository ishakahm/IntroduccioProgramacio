const prompt = require('prompt-sync')();
// si es valida, q classe es, mask, privada publica, 

console.log("===CLASSIFICADOR D'ADRECES IP===")
// Part 1: demanar els quatre octets i convertir-los a número
let octet1 = Number(prompt("Introduce el priemr octeto: "));
let octet2 = Number(prompt("Introduce el segundo octeto: "));
let octet3 = Number(prompt("Introduce el tercero octeto: "));
let octet4 = Number(prompt("Introduce el cuarto octeto: "));
let IP = `${octet1}.${octet2}.${octet3}.${octet4}`

// Part 2: validar que tots els octets estiguin entre 0 i 255
let conf;

if ((octet1 <= 255 && octet1 >= 0) && (octet2 <= 255 && octet2 >= 0) && (octet3 <= 255 && octet3 >= 0) && (octet4 <= 255 && octet4 >= 0)) {
    console.log("")
    conf = true
    console.log(`La teva IP: ${IP}`)
    
}   else {
    console.log("")
    conf = false
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.")
    process.exit(1)
}

 // Part 3: la classe segons el primer octet

  if (octet1 === 0) {
    classe = "Reservada";
  } else if (octet1 <= 126) {
    classe = "A";
  } else if (octet1 === 127) {
    classe = "Loopback";
  } else if (octet1 <= 191) {
    classe = "B";
  } else if (octet1 <= 223) {
    classe = "C";
  } else if (octet1 <= 239) {
    classe = "D";
  } else {
    classe = "E";
  }

console.log("Classe: " + classe);

// Part 4: màscara per defecte amb switch
let mascara;

switch (classe) {
    case "A":
      mascara = "255.0.0.0";
      break;
    case "B":
      mascara = "255.255.0.0";
      break;
    case "C":
      mascara = "255.255.255.0";
      break;
    default:
      // Loopback, D, E i reservada no tenen màscara
      mascara = "No en té (adreça especial)";
  }
 
  console.log("Màscara per defecte: " + mascara);
 
// Part 5: privada o pública (només per a classes A, B i C)

let privada = false;

switch (octet1) {
  case 10:
    privada = true;
    break;

  case 172:
    if (octet2 >= 16 && octet2 <= 31) {
      privada = true;
    }
    break;

  case 192:
    if (octet2 === 168) {
      privada = true;
    }
    break;

  default:
    privada = false;
    break;
}

// Només per a classes A, B o C utilitzant el ternari
if (classe === "A" || classe === "B" || classe === "C") {
  if (privada) {
    console.log("Tipus: Privada");
  } else {
    console.log("Tipus: Pública");
  }
}
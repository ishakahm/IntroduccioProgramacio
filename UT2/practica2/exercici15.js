let resultat1 = "no és un número" / 2; // NaN (Not a Number): intent d'operar matematicament un numero amb un text

let resultat2 = NaN + 10; // NaN (Not a Number): qualsevol càlcul aritmètic amb NaN retorna NaN

let resultat3 = 1 / 0; // Infinity: resultat de dividir un nombre positiu entre 0
console.log(`${resultat1}`)
console.log(`${resultat2}`)
console.log(`${resultat3}`)
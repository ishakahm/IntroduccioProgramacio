const prompt = require('prompt-sync')();
// si es valida, q classe es, mask, privada publica, 

console.log("CLASSIFICADOR D'ADRECES IP")
let o1 = Number(prompt("Introduce el priemr octeto: "));
let o2 = Number(prompt("Introduce el segundo octeto: "));
let o3 = Number(prompt("Introduce el tercero octeto: "));
let o4 = Number(prompt("Introduce el cuarto octeto: "));
let IP = `${o1}.${o2}.${o3}.${o4}`
if ((o1 <= 255 && o1 >= 0) && (o2 <= 255 && o2 >= 0) && (o3 <= 255 && o3 >= 0) && (o4 <= 255 && o4 >= 0)) {
    console.log("")
    console.log(`La teva IP:${IP}`)
}   else {
    console.log("")
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.")
}


switch (o1) {
    case 100;
        console.log();
        break
    case 4;
        console
        break
    default:
            console.log(no se)




}
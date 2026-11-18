const prompt = require('prompt-sync') ();

velContratada = Number(prompt("Di la teva velocitat en Mbps: "))
velTest = Number(prompt("Di la velocitat del test en Mbps: "))
ping = Number(prompt("Di el teu ping: "))
perdua = Number(prompt("Di ela perdua de paquets en %: "))

if (velContratada <= 0  || velTest <= 0 || ping <= 0 || perdua < 0) {
    console.log("Dades no valides")
    process.exit(1)
}
percentatge = (100 * velTest) / velContratada
console.log(`${percentatge}%`)
if (percentatge >= 90 && ping < 30 && perdua == 0 ) {
    console.log("Estat: Optim")
} else if (percentatge >= 70 && ping <= 100 && perdua <= 2) {
    console.log("Estat ACCEPTABLE")
} else if (ping > 200 || perdua > 10) {
    console.log("Estat CRITICA. Avisa el tecnic de guardia")
} else {
    console.log("Estat: DEFICIENT. Cal obrir una incidencia")
}
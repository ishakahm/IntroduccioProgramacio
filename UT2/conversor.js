const prompt = require('prompt-sync')();

// Declarar les variables Part 1
const KB = 1024;
const MB = (KB * 1024);
const GB = (MB * 1024);

console.log("=================== CONVERSOR D'UNITATS =====================");

//Part 2
console.log("1. Convertim Bytes a -> KB, MB, GB");
let bytes = Number(prompt("Insereix la Mida en bytes: "));

console.log(`${bytes} bytes són: `);
console.log(`${(bytes / KB). toFixed(2)} KB`);
console.log(`${(bytes / MB). toFixed(2)} MB`);
console.log(`${(bytes / GB). toFixed(2)} GB`);

//Part 3
console.log("2. Convertim GB a -> bytes");
let midaGB = Number(prompt("Insereix la Mida en GB: "));

let bytesTotals = midaGB * GB;
console.log(`${midaGB} GB són ${bytesTotals} bytes`);

//Part 4
console.log("3. Calculem el Temps de descàrrega")
let midaFitxerGB = Number(prompt("Insereix la Mida del fitxer a descarregar (GB): "));
let velocitatMbps = Number(prompt("Quina es la Velocitat de la connexió (Mbps): "));

// 1. Mida en bytes
let fitxerBytes = midaFitxerGB * GB;

// 2. Mida en bits (1 byte = 8 bits)
let fitxerBits = fitxerBytes * 8;

// 3. Velocitat en bits per segon (base 1000)
let velocitatBps = velocitatMbps * 1000000;

// 4. Càlcul de segons
let segons = fitxerBits / velocitatBps;

// 5. Càlcul de minuts
let minuts = segons / 60;

console.log(`Temps de descàrrega: ${segons.toFixed(0)} segons (${minuts.toFixed(1)} minuts)`);
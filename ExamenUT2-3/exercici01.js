const prompt = require('prompt-sync') ();
//Decalrar nom de la empresa i any actual
const EMPRESA = "NetLlevant" 
const ANY = 2026

//Decalaram sense inicialitzar les seguents varaiables
let hostname
let ramGB
let diskGB
let anyCompra
let garantia
let IP

hostname = String(prompt("Di quin es el nom de la teva maquina: "))
ramGB = Number(prompt("Di quin es la RAM total que tens: "))
diskGB = Number(prompt("Di quin es total de espai de la teva maquina: "))
anyCompra = Number(prompt("Di en quin es va comprar: "))
garantia = Boolean(prompt("Esta en garantia? (si o no): "))

if (garantia == "si") {
    garantia = true
}   else {
    garantia = false
}

let antiguitat = ANY - anyCompra
let ramMB = ramGB * 1024
let diskTB = diskGB / 1024

console.log("")
console.log("")

console.log("===== NetLlevant - INVENTARI =====")
console.log(`Nom de l'equip: ${hostname}`)
console.log(`Memoria RAM (GB): ${ramGB} GB (${ramMB} MB)`)
console.log(`Disc: ${diskGB} GB (${diskTB} TB)`)
console.log(`Antiguitat: ${antiguitat} anys`)
console.log(`En garantia: ${garantia}`)

console.log("")
console.log("===== TIPUS DE DADES =====")
console.log(`hostname: ${typeof hostname}`)
console.log(`ramGB: ${typeof ramGB}`)
console.log(`ramMB: ${typeof ramMB}`)
console.log(`diskGB: ${typeof diskGB}`)
console.log(`diskTB: ${typeof diskTB}`)
console.log(`anyCompra: ${typeof anyCompra}`)
console.log(`garantia: ${typeof garantia}`)
console.log(`IP: ${typeof IP}`) // Surt undifined ja que no li hem asignat cap valor, si ara li asignasim un numero donaria Number
console.log(`antiguitat: ${typeof antiguitat}`)



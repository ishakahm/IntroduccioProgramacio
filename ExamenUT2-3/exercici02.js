const prompt = require('prompt-sync') ();
//Decalaram les variables
let client
let horesMaObre 
let cost
let contracte 
let servei 
//demenam les dades
client = String(prompt("Client: "))
horesMaObre = Number(prompt("Hores de ma d'obra: "))
cost = Number(prompt("Cost de les peces (euros): "))
contracte = (prompt("Te contracte de manteniment (si o no): "))
servei = (prompt("Servei urgent? (si o no): "))

let recarreg
let costMaObra = horesMaObre * 35
let descompte 

if (servei == "si") {
    recarreg = 15
} else {
    recarreg = 0
}
if (contracte == "si") {
    descompte =  costMaObra * 0.20
} else {
    descompte = 0
}

let base = costMaObra - descompte + cost + recarreg 
let iva = base * 0.21
let tot = iva + base
console.log("===PRESSUPOST===")
console.log(`Client: ${client}`)
console.log(`Ma de obra: ${costMaObra} euros`)
console.log(`Descompte contracte: -${descompte} euros`)
console.log(`Peces: ${cost} euros`)
console.log(`Recarreg urgencia: ${recarreg} euros`)
console.log(`Base imposada: ${base}`)
console.log(`IVA: ${iva}`)
console.log(`Total: ${tot}`)

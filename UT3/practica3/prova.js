const prompt = require("prompt-sync")();

let en = Number(prompt("Pon un num: "))
console.log(en % 2)
let ver = (en % 2)
if (ver == 0) {
    console.log("es parell")
} else {
    console.log("no es parell")
}
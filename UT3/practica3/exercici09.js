const prompt = require('prompt-sync')();

let edat = Number(prompt("Introduce la teva edat: "));

if (edat < 18) {
    console.log("Ets menor d'edat")
}   else if (edat >= 18) {
    console.log("Ets major d'edat")
}

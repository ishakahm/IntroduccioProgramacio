let variableA = "A";
let variableB = "B";
let variableC = "C";

//Mostrem els valors inicals
console.log("VALORS INICIALS")
console.log(`A = ${variableA}`)
console.log(`B = ${variableB}`)
console.log(`C = ${variableC}`)

let temp = variableB
variableB = variableC
variableC = temp
//Mostrem els valors finals
console.log("VALORS FINALS")
console.log(`A = ${variableA}`)
console.log(`B = ${variableB}`)
console.log(`C = ${variableC}`)
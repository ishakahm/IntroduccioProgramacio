// == compara nomes el valor i fa conversio de tipus abans de comparar.
// === compara el valor i tambe el tipus, sense convsersions, es mes estricte.

console.log(5 == "5"); // Retornara True, ja que fa la conversio i son el mateix valor, 5
console.log(5 === "5"); // Retornara False ja que un es un numero i el altre un text
console.log(0 == false); // Retornara True ja que fa la conversio, 1 seria true
console.log(0 === false); // Retornara False ja que un es un numero y el altre es un boolea
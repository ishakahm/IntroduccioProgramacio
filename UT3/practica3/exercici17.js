// Cas A. Acces denegat ja que es es compeix una de les dues valors que es demana
let hora = 9;
if (hora < 10 || hora > 18) {
    console.log("Accés denegat: A");
}

// Cas B. Acces denegat ja que es compleix tots els valors esperats
let hora2 = 15;
let capDeSetmana = false;
if (hora < 10 || hora > 18 || capDeSetmana) {
    console.log("Accés denegat: B");
}

// Cas C. No sortira res ja que es compleix tot
let hora3 = 17;
let capDeSetmana2 = true;
if (hora < 10 && hora > 18 && capDeSetmana) {
    console.log("Accés denegat: C");
}
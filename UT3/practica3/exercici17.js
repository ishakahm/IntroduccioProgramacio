// Cas A. Acces denegat ja que es es compeix una de les dues valors que es demana
let hora = 9;
if (hora < 10 || hora > 18) {
    console.log("Accés denegat");
}

// Cas B. No sortira res ja que np es compleix cap valor esperat
hora = 15;
let capDeSetmana = false;
if (hora < 10 || hora > 18 || capDeSetmana) {
    console.log("Accés denegat");
}

// Cas C. No sortira res ja que es compleix tot
hora = 17;
capDeSetmana = true;
if (hora < 10 && hora > 18 && capDeSetmana) {
    console.log("Accés denegat");
}
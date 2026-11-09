let a = 4;
let b = 4;
let c = ++a;
let d = b++;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// ++a incrementa abans de utilitzar el valor, 
// a++ ho incrementa despres, si tornam a ver un console.log(b) sortiria que ha augmentat a 5
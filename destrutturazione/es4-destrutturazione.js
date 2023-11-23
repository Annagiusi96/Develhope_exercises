// Date due variabili a e b, scambia i loro valori usando la destrutturazione.

let a = 5;
let b = 10;

console.log(`a before: ${a}`);
console.log(`b before: ${b}`);


let numbers = [a, b];
let [first,second] = numbers;
a = second;
b = first;

console.log(`a after: ${a}`);
console.log(`b after: ${b}`);



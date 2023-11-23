// Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma 
// di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti. 
// -Stampa in console l'output della funzione somma.


function sum(...numbers){
    const result = numbers.reduce((a,number)=> a + number, 0);
    return result;
}

console.log(sum(1,5,24,85,96));
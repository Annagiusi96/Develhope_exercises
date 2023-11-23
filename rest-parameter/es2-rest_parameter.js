// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti 
// e restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

function filterOutOdds(...numbersOdd){
    const odd = numbersOdd.filter(number => number % 2 == 0);
    return odd;
}

const odd = filterOutOdds(5,2,10,54,89,12,10);
console.log(odd);
// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori.
//  Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.


function performOperation(a, b, callback) {
    let operations = (a * b) + (a + b);
    if (typeof a == "number" && typeof b == "number") {
        callback(null, operations)
    } else {
        callback(new Error("Inserisci un numero"), null)
    }
}

function displayResult(error, data) {
    if (error) {
        console.log(error);
    } else
        console.log(`Il risultato dell'operazione è ${data}`);
}

performOperation(5, 3, displayResult);




// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.

function runCallbacks(callbacks) {
  callbacks.forEach(element => {
    element()
  });
  
  }
  function firstCallback() {
    console.log("first");
  }
  function secondCallback() {
    console.log("second");
  }
  
  function thirdCallback() {
    console.log("third");
  }

  const callbackArray = [secondCallback, firstCallback , thirdCallback];
  runCallbacks(callbackArray);
// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 
// utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.


let data = {name: "John", age: 30};

function fetchDataFromAPI(data) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (typeof data == "object") {
            resolve(data);
        } else {
            reject(new Error('Inserisci oggetto data'))
        }
    },1000)
  })
}

fetchDataFromAPI(data)
.then((data)=>{
    console.log(data);
})
.catch((e)=>{
    console.log(e);
})
  


//esercizio 6 callback:

// function fetchDataFromAPI(callback) {
//     setTimeout(()=>{
//       callback(data);
//     },1000)
    
//   }
  
//   function handleData(data) {
//       console.log(data);
//   }
  
//   fetchDataFromAPI(handleData);
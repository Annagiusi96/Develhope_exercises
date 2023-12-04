// -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
// -Utilizzare setTimeout per simulare un'operazione asincrona.

const prom = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Ok');
    },2000)
})

prom
.then((res)=> console.log(res))
.catch(e => console.log(e))
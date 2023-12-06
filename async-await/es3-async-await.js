// In questo esercizio, come nel precendente andremo a simulare il caricamento di moduli di un 
// veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i
//  moduli sono stati caricati con successo!

// ATTENZIONE : il caricamento dei moduli in questo esercizio non sempre potrebbe riuscire!

// Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione 
// "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima 
// di passare alla successiva.

// Gestisci eventuali errori nel caricamento dei moduli stampando in console
//  "Impossibile lanciare il veicolo spaziale a causa di errori nei moduli."

// Alla fine, se tutti i moduli sono stati caricati con successo, stampa in 
// console "Veicolo spaziale pronto per il lancio!".


function caricaModulo(modulo) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        let moduli = ["A","B","C"]
        if(moduli.indexOf(modulo) !== -1){
            resolve(`Il modulo ${modulo} è stato caricato.`);
        }else{
            reject('Impossibile lanciare il veicolo spaziale a causa di errori nei moduli')
        }
      }, 2000);
    });
  }
  
  async function lanciaVeicoloSpaziale(){
      try {
          const first = await caricaModulo("A")
          console.log(first);
          const second = await caricaModulo("D")
          console.log(second);
          const third = await caricaModulo("C")
          console.log(third);
  
          console.log("Veicolo spaziale pronto per il lancio!");
  
      } catch (error) {
          console.log(error);
      }
  }
  
  lanciaVeicoloSpaziale()
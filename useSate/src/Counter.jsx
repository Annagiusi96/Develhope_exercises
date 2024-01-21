import { useState } from "react"

export function Counter ({initialValue = 0, incrementAmount}){
const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter((c)=> c + incrementAmount)
    }
// quando si chiama la funzione setCounter, se il valore della variabile di stato dipende dal suo valore precedente,
// allora è sempre opportuno usare un arrow function in modo che siamo sicuri che il settaggio del valore della varibile di stato 
// avvenga immediatamente. Se invece passiamo solo il valore immediato che deve avere la variabile di stato, allora
// react potrebbe eseguire questa funzione non immediatamente. Quindi per essere certi che venga eseguita subito 
// utilizziamo una callback.

    return (
    <div>
        <h2>{counter}</h2>
        <button onClick={handleCounterIncrement}>Increment</button>

    </div>
    
    )
}
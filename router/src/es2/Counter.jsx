import { useState } from "react"

export function Counter({initialValue=0,amount}){
    const [counter, setCounter] = useState(initialValue);

    function handleIncrement(){
        setCounter((c)=> c + amount)
    }

    function handleDecrement(){
        setCounter((c)=> c - amount)
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={()=> setCounter(initialValue)}>Reset</button>
        </>
    )
}
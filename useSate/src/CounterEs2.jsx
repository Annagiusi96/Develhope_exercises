import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay";

export function CounterEs2({initialValue = 0, amount}){
    const [counter, setCounter] = useState(initialValue);

    function handleCounterIncrement(){
        setCounter((c)=> c + amount)
    }

    function handleCounterDecrement(){
        setCounter((c)=> c - amount)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }


    return (
        <div>
            <CounterDisplay counterDisplay={counter}/>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}
import { useCounter } from "./useCounter"

export function HookCounter(){
    const {increment,decrement,reset,counter} = useCounter()
    return(
        <div>
            <p>{counter}</p>
            <button onClick={()=> increment(2)}>increment</button>
            <button onClick={()=> decrement(1)}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
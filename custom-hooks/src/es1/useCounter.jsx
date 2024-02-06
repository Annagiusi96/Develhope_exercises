import { useState } from "react";

export function useCounter(initialValue = 0){
    const [counter, setCounter] = useState(initialValue);

    function increment(amount){
        setCounter((c)=> c + amount)
    }

    function decrement(amount){
        setCounter((c)=> c - amount)
    }

    function reset(){
        setCounter(initialValue)
    }

    return {increment, decrement, reset, counter}
}
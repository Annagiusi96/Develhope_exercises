import { useEffect, useRef, useState } from "react"


export function CounterEs({ initialValue = 0, amount }) {
    const [counter, setCounter] = useState(initialValue);

    function handleCounterIncrement() {
        setCounter((c) => c + amount)
    }

    function handleCounterDecrement() {
        setCounter((c) => c - amount)
    }

    function handleCounterReset() {
        setCounter(initialValue)
    }

    let counterRef = useRef(null);

    useEffect(() => {
        if (counter > initialValue) {
            counterRef = 'UP'
            console.log(counterRef);
        } else if (counter < initialValue) {
            counterRef = 'DOWN'
            console.log(counterRef);
        }
    }, [counter])


    return (
        <div>
            <h2 ref={counterRef}>Counter: {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}
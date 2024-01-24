import { useEffect, useRef } from "react"

export function Useref2(){
const printRef = useRef(false);

useEffect(()=>{
    if (!printRef.current) {
        printRef.current = true;
        console.log('First');
    }
},[])

    return (
    <>
    <h2>Useref two</h2>
    </>
    )
}
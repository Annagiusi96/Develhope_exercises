import { useEffect, useRef } from "react"

export function Useref2(){
const printRef = useRef(null);

useEffect(()=>{
    if (printRef.current != null) {
        printRef.current = null;
        console.log('First');
    }
},[])

    return (
    <>
    <h2 ref={printRef}>Useref two</h2>
    </>
    )
}
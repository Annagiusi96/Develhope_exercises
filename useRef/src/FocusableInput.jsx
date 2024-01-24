import { useEffect, useRef } from "react"

export function FocusableInput(){
    const focusInput = useRef(null);

    useEffect(()=>{
        focusInput.current?.focus()
    },[])
    
    return (
        <input type="text" ref={focusInput}></input>
    )
}
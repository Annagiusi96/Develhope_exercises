import { useState } from "react"

export function Container({title, children}){
    const [collapse, setCollapse] = useState(false)
    function handleToggle(){
        setCollapse((prev) => !prev)
    }
    return (
        <>
        <div>{title}<button onClick={handleToggle}>Toggle</button></div>
        <div className={collapse ? 'app-content' : 'app-hidden'}>{children}</div>
        </>
    )
}
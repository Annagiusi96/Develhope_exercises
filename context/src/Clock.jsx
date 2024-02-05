import { useContext, useEffect, useState } from "react"
import { languageContext } from "./LanguageContext";

export function Clock(){
    const [date, setDate] = useState(new Date());

    const language = useContext(languageContext);

    useEffect(()=>{
        setInterval(() => {
            setDate(new Date ())
        }, 1000);
    },[])
    return (
        <>
        {language === 'en' ? <p>Current time</p> : <p>Ora corrente</p>}
        <h2>{date.toLocaleTimeString()}</h2>
        </>
    )
}
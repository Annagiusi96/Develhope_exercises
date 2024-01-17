import { Hello } from "./Hello";
import { Message } from "./Message";

export function App(){
    return(
        <div>
            <Hello></Hello>
            <Hello></Hello>
            <Hello></Hello>
            <Hello></Hello>
            {/* se utilizzo il componente Hello più volte nell'App componente, viene semplicemente eseguito il renderig
            del componente Hello tante volte quanto è stato usato */}
            <Message></Message>
            {/* se renderizzo il componente Message, viene visualizzato soltanto il suo contenuto, ovvero il <p></p> */}
        </div>
    )
}
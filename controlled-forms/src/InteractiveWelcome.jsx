import { useState } from "react";
import { WelcomeComponent } from "./WelcomeComponent";

export function InteractiveWelcome(){
 const [data,setData] = useState('');

 function handleChangeName(e){
    const value = e.target.value;
    setData(value)
 }
    return (
        <div>
            <label>Insert your name </label>
            <input value={data} onChange={handleChangeName}></input>
            <WelcomeComponent name={data}/>
        </div>
    )
}
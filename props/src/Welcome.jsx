// export function Welcome({name}){
//     return <p>Welcome, {name}</p>
// }

import { Age } from "./Age";

//posso impostare un valore di default al prop name che si vedrà se non verrà settato nessun valore nel componente App

// export function Welcome({name = "Tizio"}){
//     return <p>Welcome, {name}</p>
// }


//PROPS-2

// export function Welcome({ name, age }) {
//     return <div>
//         <p>Welcome, <strong>{name}</strong> </p>
//         <p>Your age is {age}</p>
//     </div>
// }

//PROPS-3
export function Welcome({name,ageApp}){
    return <div>
        <p>Welcome, <strong>{name}</strong></p>
        <Age age={ageApp}/>
    </div>
}
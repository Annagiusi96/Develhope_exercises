export function Welcome({name}){
    return <p>Welcome, {name}</p>
}

//posso impostare un valore di default al prop name che si vedrà se non verrà settato nessun valore nel componente App

// export function Welcome({name = "Tizio"}){
//     return <p>Welcome, {name}</p>
// }
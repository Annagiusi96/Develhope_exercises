// export function Welcome({name}){
//     return <p>Welcome, {name}</p>
// }

//posso impostare un valore di default al prop name che si vedrà se non verrà settato nessun valore nel componente App

// export function Welcome({name = "Tizio"}){
//     return <p>Welcome, {name}</p>
// }


//PROPS-2

export function Welcome({ name, age }) {
    return <div>
        <p>Welcome, <strong>{name}</strong> </p>
        <p>Your age is {age}</p>
    </div>
}
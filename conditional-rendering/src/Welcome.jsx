import { Age } from "./Age";

export function Welcome({ name, myAge}) {
    return (
        <div>
            <h2>Welcome, {name}</h2>
            {myAge > 18 && <Age age={myAge}/>}
            {myAge && <Age age={myAge} />}
            {myAge > 18 && myAge < 65 && <Age age={myAge} />}
            {myAge > 18 && myAge < 65 && name === "John" && <Age age={myAge} />}
        </div>
    )
}
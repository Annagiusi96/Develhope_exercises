import { Link } from "react-router-dom"

export function NotFound(){
    return(
        <>
            <h4>Page not found :/ </h4>
            <Link to="/">Back home</Link>
        </>
    )
}
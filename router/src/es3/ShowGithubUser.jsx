
import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { Link } from "react-router-dom";

export function ShowGithubUser(){
    const { username } = useParams()
    return(
        <>
            <h3>All Github Users</h3>
            
            <hr />

            {username && <GithubUser username={username}/>}

            <Link to="/">Back to home</Link>
            
           
        </>
    )
}
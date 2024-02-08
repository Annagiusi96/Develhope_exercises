
import { Outlet, useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser(){
    const { username } = useParams()
    return(
        <>
            <h3>All Github Users</h3>
            
            <hr />

            {username && <GithubUser username={username}/>}
            
           
        </>
    )
}
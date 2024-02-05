import { useEffect, useState } from "react";

export function GithubUser({username}){
const [user, setUser] = useState(null)

async function getData(){
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json = await response.json();
        setUser(json)
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
    getData(username)
},[username])


    return(
        <>
        {!user && <p>Loading...</p>}
        {user && <div>
            <h1>Name: {user.name}</h1>
            <h3>Nickname: {user.login}</h3>
            <img src= {user.avatar_url} width={100} />
        </div>}
        </>
    )
}
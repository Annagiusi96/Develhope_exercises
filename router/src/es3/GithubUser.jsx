import { useEffect, useState } from "react";

export function GithubUser(){
    const [userData, setUserData] = useState(null);

    async function getData(){
        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            const json = await res.json();
            setUserData(json)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getData()
    },[username])

    return(
        <>
            {userData && 
                <div>
                    <h2>Name: {userData.name}</h2>
                    <h3>Username: {userData.login}</h3>
                    <img src={userData.avatar_url} width={100} />
                </div>
            }
        </>
    )
}
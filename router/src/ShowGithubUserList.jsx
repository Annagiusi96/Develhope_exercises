import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function ShowGithubUserList(){
    const {username} = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        async function getUser(){
            setLoading(true)
            try {
                const res = await fetch(`https://api.github.com/users/${username}`);
                const json = await res.json();
                setUser(json);
            } catch (error) {
                console.error(error);
            } finally{
                setLoading(false)
            }
        }
        getUser()
        console.log(username);
    }, [username])

   
    return (
        <>
            {loading && <p>Loding...</p>}
            {user && user.login === username && 
                <div>
                    <h2>Name: {user.login}</h2>
                    <h3>Username: {user.login}</h3>
                    <img src={user.avatar_url} width={100} />
                </div>
            }
        </>
    )
}
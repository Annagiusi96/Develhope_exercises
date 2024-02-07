import { useEffect } from "react";
import { useGithubUser2 } from "./useGithubUser2"

export function HookGithubUser2() {
    const { userData, error, getData, loading } = useGithubUser2('https://api.github.com/users/Annagiusi96');

    // useEffect(()=>{
    //     getData()
    // },[])

    return (
        <div>
            <button onClick={()=> getData()}>Show user</button>
            {loading && <p>Loading...</p>}
            {error && error.message && <p>Error...</p>}
            {userData && <div>
                <h1>Name: {userData.name}</h1>
                <h2>Nickname: {userData.login}</h2>
                <img src={userData.avatar_url}/>
            </div>
            }
        </div>
    )
}
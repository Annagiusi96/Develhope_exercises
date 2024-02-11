import { useGithubUsername } from "./useGithubUserame"

export function ShowGithubUsername({ username }){
    const {data, error, fetchGithubUser, loading} = useGithubUsername(username);

    return(
        <>
        <div>
            <button onClick={fetchGithubUser}>Load user data</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {data && !error && 
                <h1>{data.name}</h1>
            }
            {data && data.message && <p>User not found</p>}
        </div>
        </>
    )
}
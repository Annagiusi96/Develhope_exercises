import { useGithubUser } from "./useGithubUser"

export function ShowGithubUserHook(){
   const {data, error, isLoading} = useGithubUser()
    return(
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Errore</p>}
            {data && 
                <h1>{data.login}</h1>
            }
        </div>
    )
}
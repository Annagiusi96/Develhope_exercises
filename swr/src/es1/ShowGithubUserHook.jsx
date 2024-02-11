import { useGithubUser } from "./useGithubUser"

export function ShowGithubUserHook(){
   const {data, error, isLoading, handleRefreshData} = useGithubUser()
    return(
        <div>
            <button onClick={handleRefreshData}>Refresh data</button>
            {isLoading && <p>Loading...</p>}
            {error && <p>Errore</p>}
            {data && 
                <h1>{data.login}</h1>
            }
        </div>
    )
}
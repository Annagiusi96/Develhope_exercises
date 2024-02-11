import useSWR from "swr";

const fetcher = url => fetch(url).then((res)=> res.json());

export function useGithubUsername(username){
    const {data, error, mutate} = useSWR(`https://api.github.com/users/${username}`,
    username != null && fetcher);

    function fetchGithubUser(){
        mutate()
    }

    // if(username != null){
    //     useSWR(fetcher)
    // }

    return {data, error, loading: !data && !error, fetchGithubUser}
}
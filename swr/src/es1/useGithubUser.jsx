import useSWR from "swr";

const fetcher = (url)=> fetch(url).then((response)=> response.json())

export function useGithubUser(){
   const {data, error} = useSWR('https://api.github.com/users/Ben', fetcher)

   return {data, error, isLoading: !data && !error}

}
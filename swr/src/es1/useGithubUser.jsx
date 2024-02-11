import useSWR from "swr";

const fetcher = (url)=> fetch(url).then((response)=> response.json())

export function useGithubUser(){
   const {data, error, mutate} = useSWR('https://api.github.com/users/Ben', fetcher);

   function handleRefreshData(){
      mutate();
   }

   return {data, error, isLoading: !data && !error, handleRefreshData}

}
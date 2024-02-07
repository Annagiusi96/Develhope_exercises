import { useState, useEffect } from "react";

export function useGithubUser(url){
const [userData, setUserData] = useState()

async function getData(){
    try {
        const response = await fetch(url);
        const json = await response.json();
        setUserData(json)
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
    getData()
},[])

return {userData}
}
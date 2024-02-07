import { useState } from "react";

export function useGithubUser2(url){
    const [userData, setUserData] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    async function getData(){
        setLoading(true)
        try {
            const response = await fetch(url);
            const json = await response.json();
            setUserData(json)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    
    return {userData, getData, loading, error}
    }
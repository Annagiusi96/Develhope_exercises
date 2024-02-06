import { useEffect, useState } from "react";
import { GithubUserForm } from "./GithubUserForm";

export function GithubUsersForm() {
    const [user, setUser] = useState('');//gestione dell'input, mi salvo ciò che viene scritto in user
    const [data, setData] = useState(null); //qll che mi arriva dal fetch lo salvo in data
    const [usersArr, setUsersArr] = useState([]);//riempo l'array dei vari data che fetcho


    async function getData(){
        try {
            const res = await fetch(`https://api.github.com/users/${user}`)
            const json = await res.json()
            setData(json)
            console.log(json);
        } catch (error) {
            console.error(error);
        }
    }

    function handleFetch(e){
        e.preventDefault();
        getData()
    }

    useEffect(()=>{
        //data.message appare solo se l'user non viene trovato
        if(data && !data.message){
            setUsersArr((prevArr)=> [...prevArr, data])
        }
    },[data])

    return (
        <>
            <form onSubmit={handleFetch}>
                <label>Username </label>
                <input type="text" value={user} onChange={(e)=> setUser(e.target.value)} />
                <button>Submit</button>
            </form>
            {data && data.message && <p>User not found</p>}
           <ul>
            {data && !data.message &&
                usersArr.map((user)=>(
                    <li key={user.id}><GithubUserForm username={user}/></li>
                ))
            }
           </ul>
        </>
    )
}
import { useEffect, useState } from "react"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { ShowGithubUserList } from "./ShowGithubUserList";

export function GithubUserList() {
    const [userData, setUserdata] = useState(null);
    
    async function getData() {
        try {
            const res = await fetch(`https://api.github.com/users`);
            const json = await res.json();
            setUserdata(json)
        } catch (error) {
            setError(error);
        }
    }

    
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div>
                <h4>List Github Users</h4>
                <ul>
                    {userData &&
                        userData.map((person) => {
                            return <li key={person.id}><Link to={`/users/${person.login}`}>{person.login}</Link></li>
                        })
                    }
                </ul>
                <hr />
                <Outlet/>
            </div>
        </>
    )
}
import { useGithubUser } from "./useGithubUser"

export function HookGithubUser() {
    const { userData } = useGithubUser('https://api.github.com/users/Annagiusi96')
    return (
        <div>
            {userData &&
                <h1>Name: {userData.name}</h1>
            }
        </div>
    )
}
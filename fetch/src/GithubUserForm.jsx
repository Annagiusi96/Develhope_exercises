export function GithubUserForm({username}){
    return(
        <>
        {username &&
       <div>
            <h1>Name: {username.name}</h1>
            <h3>Nickname: {username.login}</h3>
            <p>Avatar <img src={username.avatar_url} width={100}/> </p>
        </div>
        }
        </>
    )
}
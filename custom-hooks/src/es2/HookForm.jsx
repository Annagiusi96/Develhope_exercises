import { useFormControlled } from "./useFormControlled";

export function HookForm(){
    const {handlePasswordChange,handleUsernameChange,password,username} = useFormControlled()

    console.log(password);
    console.log(username);

    return(
        <form onSubmit={(e)=> e.preventDefault()}>
            <input type="text" placeholder="username" value={username} onChange={handleUsernameChange}/>
            <input type="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
            <button>Submit</button>
        </form>
    )
}
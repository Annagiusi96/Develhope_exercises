import { useState } from "react";

export function useFormControlled(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    return {username, password, handlePasswordChange, handleUsernameChange}
}
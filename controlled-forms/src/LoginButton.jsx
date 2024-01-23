import { useState } from "react"

export function LoginButton() {
    const [data, setData] = useState({
        username: '',
        password: '',
        checkbox: false
    })

    function handleChangeInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked

        setData(d => {
            return {
                ...d,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function onLogin(data){
        console.log(data);
    }

    //aggiunta esercizio 4
    function handleReset(){
        setData({
            username: '',
            password: '',
            checkbox: false
        })
    }
    return (
        <div>
            <label>Username </label>
            <input name="username" value={data.username} onChange={handleChangeInput}></input>

            <label> Password  </label>
            <input name="password" type="password" value={data.password} onChange={handleChangeInput}></input>

            <label> Remember </label>
            <input name="checkbox" type="checkbox" checked={data.checkbox} onChange={handleChangeInput}></input>

            <button disabled={!data.password || !data.username} onClick={()=>onLogin(data)} >Login</button>

            {/* //aggiunta esercizio 4 */}
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
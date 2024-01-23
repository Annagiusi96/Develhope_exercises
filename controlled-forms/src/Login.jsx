import { useState } from "react"


export function Login() {
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
    return (
        <div>
            <label>Username </label>
            <input name="username" value={data.username} onChange={handleChangeInput}></input>

            <label> Password  </label>
            <input name="password" type="password" value={data.password} onChange={handleChangeInput}></input>

            <label> Remember </label>
            <input name="checkbox" type="checkbox" checked={data.checkbox} onChange={handleChangeInput}></input>
        </div>
    )
}
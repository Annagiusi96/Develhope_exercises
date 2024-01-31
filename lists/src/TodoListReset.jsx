import { useState } from "react"

export function TodoListReset(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    function handleTodoAdd(){
        setTodos([...todos, input])
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={handleTodoAdd}>Add</button>
            <button onClick={()=>setInput('')}>Reset</button>
            <ul>
                {todos.map((item, indx)=> (
                    <li key={indx}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
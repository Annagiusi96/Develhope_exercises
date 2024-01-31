import { useState } from "react"

export function TodoListRemove(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    function handleTodoAdd(){
        setTodos([...todos, input])
    }

    function handleRemoveTodo(index){
        const filteredArr = todos.filter((_ ,i)=> i !== index);
        setTodos(filteredArr);

        // metodo con splice
        // const updateTodos = [...todos];
        // updateTodos.splice(index, 1);
        // setTodos(updateTodos)
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={handleTodoAdd}>Add</button>
            <button onClick={()=>setInput('')}>Reset</button>
            <ul>
                {todos.map((item, indx)=> (
                    <li key={indx}>
                        {item}
                        <button onClick={()=>handleRemoveTodo(indx)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
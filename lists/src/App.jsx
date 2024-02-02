import { Colors } from "./Colors"
import { TodoList1 } from "./TodoList1"
import { TodoListRemove } from "./TodoListRemove"
import { TodoListReset } from "./TodoListReset"

function App() {
  const colorArr = [
    {id:1, name: 'red'},
    {id:2, name: 'black'},
    {id:3, name: 'brown'},
    {id:4, name: 'yellow'},
    {id:5, name: 'green'},
    {id:6, name: 'purple'},
]
  return (
    <>
      {/* <Colors colorArr={colorArr}/> */}

      {/* <TodoList1></TodoList1>

      <TodoListReset></TodoListReset> */}

      {/* <TodoListRemove></TodoListRemove> */}

      <TodoListReset></TodoListReset>
    </>
  )
}

export default App

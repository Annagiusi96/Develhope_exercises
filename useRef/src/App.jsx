import { CounterEs } from "./CounterEs"
import { FocusableInput } from "./FocusableInput"
import { Useref2 } from "./Useref2"

function App() {
  
  return (
    <>
     <FocusableInput/>

     <Useref2/>

     <CounterEs amount={1}></CounterEs>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import { Welcome } from "./es1/Welcome"
import { Counter } from "./es2/Counter"
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name={'Anna'} age={27}></Welcome>}></Route>
        <Route path="/counter" element={<Counter amount={2} />}></Route>
      </Routes>
    </>
  )
}

export default App

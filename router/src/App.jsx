import { Route, Routes } from "react-router-dom"
import { Welcome } from "./es1/Welcome"
function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<Welcome name={'Anna'} age={27}></Welcome>}></Route>
      </Routes>
    </>
  )
}

export default App

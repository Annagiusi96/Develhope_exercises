import { Link, Route, Routes } from "react-router-dom"
import { Welcome } from "./es1/Welcome"
import { Counter } from "./es2/Counter"
import { ShowGithubUser } from "./es3/ShowGithubUser"
import { GithubUser } from "./es3/GithubUser"
import { NotFound } from "./NotFound"

function App() {


  return (
    <>
      <div>
        <h1>My App</h1>

        <Routes>
          <Route path="/" element={<Welcome name={'Anna'} age={27}></Welcome>}></Route>
          <Route path="/counter" element={<Counter amount={2} />}></Route>
          <Route path="/users" element={<ShowGithubUser />}>
            <Route path=":username" element={<GithubUser />} />
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>

        <div className="links">
          <Link to="/counter">Counter</Link>
          <Link to="/users">Github Users</Link>
        </div>
      </div>
    </>
  )
}

export default App

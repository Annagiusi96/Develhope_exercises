import { Welcome } from "./Welcome"


function App() {
  return <Welcome name="Manfri"/>
}

//se do un valore di defaul al prop name del componente Welcome e qui non setto nessun nuovo valore, 
//allora verrà renderizzato quel valore di default

// function App() {
//   return <Welcome/>
// }

export default App

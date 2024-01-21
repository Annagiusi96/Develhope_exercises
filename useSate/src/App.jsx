import { useState } from 'react'
import { Counter } from './Counter'
import { CounterEs2 } from './CounterEs2'
import { Clock } from './Clock'



function App() {


  return (
    <>
      {/* counter esercizio 1 */}
      <Counter incrementAmount={2}></Counter>

    {/* counter esercizio 2 */}
      <CounterEs2 amount={3}/>

      {/* useEffect esercizio 2 */}
      <Clock/>
    </>
  )
}

export default App

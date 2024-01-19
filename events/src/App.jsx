import { useState } from 'react'
import { AlertClock } from './AlertClock'


function App() {
  function handlerShowTime(){
    const now = new Date();
    alert(`The current time is ${now.toLocaleTimeString()}`)
  }

  return (
    <>
      <AlertClock onClick={handlerShowTime}></AlertClock>
    </>
  )
}

export default App

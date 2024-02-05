import { useState } from "react";
import { Clock } from "./Clock";
import { languageContext } from "./LanguageContext";

function App() {
const [language, setLanguage] = useState('en')
  return (
    <>
    <select onChange={(e)=> setLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="it">IT</option>
    </select>
      <languageContext.Provider value={language}>

        <Clock></Clock>

      </languageContext.Provider>
    </>
  )
}

export default App

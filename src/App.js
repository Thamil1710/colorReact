import React from 'react'
import Input from './Input'
import Square from "./Square"
import {useState} from "react"


const App = () => {
 const [colorVal, setColorVal] = useState("")
 const [hexVal , setHexVal] = useState ("")
 const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="app">
    < Square 
    colorVal = {colorVal}
    hexVal = {hexVal}
    isDarkText={isDarkText}
    />
    <Input
     setColorVal={setColorVal}
     setHexVal={setHexVal}
     setIsDarkText={setIsDarkText}
     isDarkText={isDarkText}
     colorVal={colorVal}
     />

    </div>
  )
}

export default App
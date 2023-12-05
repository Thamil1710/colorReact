import React from 'react'
import colorNames from "colornames"

const InputData = ({colorVal, setColorVal,setHexVal, setIsDarkText, isDarkText}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
    <label>Add Color Name:</label>
    <input autoFocus type='text' placeholder='Add color name' required value={colorVal}
    onChange={(e)=> {
      setColorVal(e.target.value);
      setHexVal(colorNames(e.target.value))
    }}
    />
    <button onClick={(e)=>{setIsDarkText(!isDarkText)}}>
      Taggel Text color
    </button>
    </form>
  )
}

export default InputData
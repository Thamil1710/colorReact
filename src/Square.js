import React from 'react'

const Square = ({colorVal,hexVal,isDarkText}) => {
  return (
    <section className='square'
    style={{backgroundColor:colorVal, color: isDarkText? "#000": "#FFF" }}
    >
      <p>{colorVal?colorVal:"Empty Value" }</p>
      <p> {hexVal? hexVal:null }</p>

    </section>
  )
}

Square.defaultProps = {
  colorVal: "Empty color Value"
}

export default Square
import { useState } from 'react'


function Square({value, onSquareClick}){
  return(
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  )
}


export default function Board() {
  
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i){
    const nextSquare = squares.slice()
    nextSquare[i] = 'X'
  }

  return (
    <div className='board'>
    <Square value={squares[0]} onSquareClick={handleClick(0)}/>
    <Square value={squares[1]}/>
    <Square value={squares[2]}/>
    <Square value={squares[3]}/>
    <Square value={squares[4]}/>
    <Square value={squares[5]}/>
    <Square value={squares[6]}/>
    <Square value={squares[7]}/>
    <Square value={squares[8]}/>
     
    </div>
  )
}



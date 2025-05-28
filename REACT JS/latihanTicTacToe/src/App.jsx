import { useState } from 'react'


function Square(){
  return <button className='square'>X</button>
}
export default function Board() {
  

  return (
    <div className='board'>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
     
    </div>
  )
}



import './App.css';
import React, { useState } from 'react'

function App() {
//используем хук useState для изменения состояния
  let [number,setNumber]=useState(0)

//функция для кнопки "Минус"
 let clickMinus =()=>{
    return setNumber(--number)
  }
//функция для кнопки "Плюс"
  let clickPlus =()=>{
    return setNumber(++number)
  }


  return (
    <div className='main'>
      <div className='main__window'>      
        <div className='window_blockcounter'>
        <h2 className='window_title'>Счетчик</h2>
        <h1 className='window_counter'>{number}</h1>
        <div className='window__button'>
        <button className ='button_minus' onClick={clickMinus}>- Минус</button>
        <button className='button_plus'onClick={clickPlus}>Плюс +</button>
        </div>  
        </div>                
      
      </div>      
    </div>
  );
}

export default App;

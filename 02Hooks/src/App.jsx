import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counterValue, setcounterValue] = useState(15)
  // const [count, setCount] = useState(0)
  // let counter = 15;

  function addValue(){
    counterValue = counterValue+1
    setcounterValue(counterValue)
    console.log(counterValue)
   
  }

  const downValue = () =>{
    
    if(counterValue>0){
      counterValue = counterValue-1
      setcounterValue(counterValue)
      console.log(counterValue)
    }
    
   
  }

  return (
    <>
      <h1>Hooks Concept</h1>
      <h2>Counter value : {counterValue}</h2>

      <button onClick={addValue} >Increase Value {counterValue}</button>
 <br></br>
      <button onClick={downValue}>Decrease Value{counterValue} </button>
    </>
  )
}

export default App

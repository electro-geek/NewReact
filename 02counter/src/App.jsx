import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  
  // const [remove, ]

  // let counter = 5

  const addValue = () => {
    
    // console.log("clicks", counter)
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter -1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br></br>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

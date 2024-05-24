import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    useState
  }

  return (
    <>
      <h1>Here is your Counter: {counter}</h1>
      <br></br>
      <button
      onClick={addValue}
      >Add Value</button>
    </>
  )
}

export default App

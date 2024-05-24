import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  //set counter accepts accepts call back function

  const addValue = () => {
    //below code will not increment the value of counter again and again
    //react will consider this bundle together
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }

  const removeValue = () => {
    setCounter(counter -1)
  }

  return (
    <>
      <h1>Here is your Counter: {counter}</h1>
      <br></br>
      <button
      onClick={addValue}
      >Add Value</button>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

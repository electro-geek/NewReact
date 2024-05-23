import { useState } from 'react'
import Something from './something.jsx'

function App() {
  const username = 'chai aur code'
  return (
    <>
    <h1>React with vite {username}</h1>
    <Something />
    <p>test para</p>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Hitesh",
    age: 21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        Tailwind Test</h1>
      <Card username ='Mritunjay' btnText='click me' imageLink = "https://images.pexels.com/photos/23881778/pexels-photo-23881778/free-photo-of-on-a-cloudy-day-at-the-lakefront-of-keswick-england.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"/>
      <Card username = 'Sharma' btnText='click me' imageLink = "https://images.pexels.com/photos/24286572/pexels-photo-24286572/free-photo-of-a-black-and-white-photo-of-a-neon-sign-for-the-diskohelt.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiceGame2 from './components/DiceGame2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DiceGame/> */}
      <DiceGame2/>
    </>
  )
}

export default App

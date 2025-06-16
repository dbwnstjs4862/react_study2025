import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Zustand 실습1 */}
      {/* <Count/> */}
      {/* Zustand 실습2 */}
      <Todo/>
    </>
  )
}

export default App

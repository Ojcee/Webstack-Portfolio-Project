import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup/Signup'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    {/* <Signup /> */}
      <HomePage />
    </>
  )
}

export default App

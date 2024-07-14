import { useState } from 'react'
import './App.css'
import Logo from './components/Logo'
import CandidateInfo from './components/CandidateInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo />
      <CandidateInfo />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Logo from './components/logo/Logo'
import CandidateInfo from './components/candidateInfo/CandidateInfo'

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

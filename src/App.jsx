import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AudioPlayer from './components/audio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AudioPlayer/>
    </>
  )
}

export default App

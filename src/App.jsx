import { useState } from 'react'
import isOdd from 'is-odd'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(isOdd(1));
  return (
    <div className="App">
      
    </div>
  )
}

export default App

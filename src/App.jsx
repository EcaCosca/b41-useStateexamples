import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from "./components/Hello"
import './App.css'
import ColorChanger from './components/ColorChanger'
import Car from "./components/Car"  

function App() {
  const [count, setCount] = useState(0)
  const [altClass, setAltClass] = useState("card")
  // VARIABLES
  // let count = 0
  // count = 2
  // count++

  const handleClick = () => setCount((count) => count + 1)

  return (
    <>
      <Hello count={count} setCount={setCount}/>
      <div className={altClass}>
        {/* <button onClick={handleClick}>
          count is {count}
        </button>
        <button onClick={()=> setAltClass("hioleksiy")}>
          Class changer
        </button> */}
        {/* <ColorChanger /> */}
        <Car />
      </div>
    </>
  )
}

export default App

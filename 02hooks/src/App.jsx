import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, totalCount] = useState(3)

  // let counter = 3

  const addValue = () => {
    // counter += 1;

    if(count >= 20) {
      return;
    }
    totalCount(count + 1);
  }

  const removeValue = () => {

    if(count <= 0) {
      return;
    }
    totalCount(count - 1);
  }

  return (
    <>
      <h1>React at 01:38 AM, 9th Nov, 2025</h1>
      <h3>Counter value: {count}</h3>

      <button onClick={addValue}>Add value {count}</button>
      <br />
      <button
      onClick={removeValue}>remove value {count}</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App

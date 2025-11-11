import { useState } from 'react'
import React from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'Rishab',
    age: 20
  }
  let newArr = [91, 92]

  return (
    <>
      <h1 className='bg-amber-300 text-black p-9 rounded-3xl '>Heyy Yaaa</h1>
      <Card username="rishabdev" footer="01:46"/>
      <Card username="r1zzha6"/>
    </>
  )
}

export default App

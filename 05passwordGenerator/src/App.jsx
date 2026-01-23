import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz"
    if (numAllow) str += "0123456789"
    if (charAllow) str += "~`!@#$%^&*()-_=+[]{}|,.<>/?"

    for (let i=1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllow, charAllow, setPassword])

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 45);
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-md px-3 py-3 my-9 bg-gray-600 text-orange-300'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-md overflow-hidden mb-3'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-0.3 px-3'
            placeholder='Password'
            readOnly 
            ref={passwordRef}
          />
          <button 
            onClick={copyPassToClipboard}
            className='outline-none bg-blue-300 text-white px-3 py-2 shrink-0'>{copied? 'Copied!': 'Copy'}
          </button>
        </div>
        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-0.3'>
            <input 
              type="range"
              id='passLength'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor='passLength'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-0.3'>
            <input 
              type="checkbox"
              defaultChecked={numAllow}
              id='numInput'
              onChange={() => {
                setNumAllow((prev) => !prev);
              }} 
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-0.3'>
            <input 
              type="checkbox"
              defaultChecked={charAllow}
              id='charInput'
              onChange={() => {
                setCharAllow((prev) => !prev)
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

// Importing react in every file is mandatory. This helps in avoiding modern problems, in which I generally wasted my 2+ months on it.

import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import UpdateTodo from './components/UpdateTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Redux Toolkit 
      </h1>
      <h3>
        Redux and react-redux are two different things. Redux is a core library while react-redux is an implementation which connects react & redux to each other for the communication. 

        Now, when we use redux-toolkit, most of the things work automatically behind the scenes like "Never Mutate Your State"

        Initially, it starts from building store.js 'Take a look at ./src/app/store.js' which is a "single source of truth", every application has only one store.
      </h3>
      <AddTodo />
      {/* <UpdateTodo /> */}
      <Todos />
    </>
  )
}

export default App

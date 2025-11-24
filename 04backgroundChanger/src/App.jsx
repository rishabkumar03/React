import { useState } from "react"

function App() {
  const [color, setColor] = useState("khaki")

  return (
    <div className="w-full h-screen duration-300" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-3 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-100 px-3 py-3 rounded-full">
          <button onClick={() => setColor("rebeccapurple")} className="outline-none px-3 py-3 rounded-full text-amber-100 shadow-2xl" style={{backgroundColor: "rebeccapurple"}}>
            Purple
          </button>
          <button onClick={() => setColor("indianred")} className="outline-none px-3 py-3 rounded-full text-amber-100 shadow-2xl" style={{backgroundColor: "indianred"}}>
            Pink
          </button>
          <button onClick={() => setColor("saddlebrown")} className="outline-none px-3 py-3 rounded-full text-amber-100 shadow-2xl" style={{backgroundColor: "saddlebrown"}}>
            Brown
          </button>
          <button onClick={() => setColor("Highlight")} className="outline-none px-3 py-3 rounded-full text-amber-100 shadow-2xl" style={{backgroundColor: "Highlight"}}>
            Blue
          </button>
          <button onClick={() => setColor("aqua")} className="outline-none px-3 py-3 rounded-full text-amber-100 shadow-2xl" style={{backgroundColor: "aqua"}}>
            Cyan
          </button>
          <button onClick={() => setColor("black")} className="outline-none px-3 py-3 rounded-full text-amber-100 shadow-2xl" style={{backgroundColor: "black"}}>
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

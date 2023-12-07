// eslint-disable-next-line react/jsx-no-target-blank
import { useState } from 'react'




function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-700' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2 bg-slate-800 ">
        <div className="flex flex-wrap justify-center gap-3 p-2 px-5 rounded-lg">
          <button onClick={() => setColor("red")} className='bg-red-500 w-16 p-2 rounded-lg'
            style={{ backgroundColor: "red" }}>red</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 p-2 px-5 rounded-lg">
          <button
            onClick={() => setColor("white")}
            className='bg-red-500 w-16 p-2 rounded-lg'
            style={{ backgroundColor: "white" }}>white</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 p-2 px-5 rounded-lg">
          <button
            onClick={() => setColor("green")}
            className='bg-red-500 w-16 p-2 rounded-lg'
            style={{ backgroundColor: "green" }}>green</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 p-2 px-5 rounded-lg">
          <button
            onClick={() => setColor("yellow")}
            className='bg-red-500 w-16 p-2 rounded-lg'
            style={{ backgroundColor: "yellow" }}>yellow</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 p-2 px-5 rounded-lg">
          <button
            onClick={() => setColor("black")}
            className='bg-red-500 w-16 p-2 text-cyan-100 rounded-lg'
            style={{ backgroundColor: "black" }}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App






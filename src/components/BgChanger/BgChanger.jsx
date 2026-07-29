import { useState } from 'react'
import { Link } from 'react-router-dom'

function BgChanger() {
    const [color, setColor] = useState("blue")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-35 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}  onClick={() => setColor("red")}>Red</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}  onClick={() => setColor("green")}>Green</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}  onClick={() => setColor("blue")}>Blue</button>
                <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "pink"}}  onClick={() => setColor("pink")}>Pink</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "olive"}}  onClick={() => setColor("olive")}>Olive</button>
                <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}  onClick={() => setColor("white")}>White</button>
                <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}  onClick={() => setColor("black")}>Black</button>
            </div>
        </div>
        <Link to="/" 
            className="bg-slate-800 text-xl text-white px-2 py-1 rounded-lg absolute bottom-12 left-1/2 -translate-x-1/2 shadow-2xl shadow-black/40 hover:bg-slate-700">
        ← Back to Projects
        </Link>
    </div>
  )
}

export default BgChanger
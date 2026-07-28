import React from "react"
import { Link } from "react-router-dom"

function App() {

  return (
    <>
      <div className="w-full h-screen bg-slate-950 text-white flex justify-center items-center">
        <div className="w-150 text-center bg-slate-900 border-slate-700 p-5 rounded-lg shadow-2xl shadow-black/40">
          <h1 className="text-4xl font-bold mb-7">React Projects</h1>

          <div>
            <div className="bg-slate-800 mt-5 flex justify-between py-3 px-4 rounded-lg shadow-2xl shadow-black/40">
              <span className="text-xl">Counter</span>
              <Link    to="/counter"
                className="p-1 bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg px-2 shadow-2xl shadow-black/40"
              >
              View Project</Link>
            </div>
            
            <div className="bg-slate-800 mt-5 flex justify-between py-3 px-4 rounded-lg shadow-2xl shadow-black/40">
              <span className="text-xl">Background Changer</span>
              <Link    to="/bgchanger"
                className="p-1 bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg px-2 shadow-2xl shadow-black/40"
              >
              View Project</Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
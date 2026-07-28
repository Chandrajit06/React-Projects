import { useState } from 'react'
import { Link } from "react-router-dom"

function Counter({current = 11}) {

  const [counter, setCounter] = useState(current);

  const increase = () => {
    // State updates inside an event handler are batched, React only keeps the last call in the batch.
    // setCounter(counter + 1); setCounter(counter + 1); setCounter(counter + 1);
    // It just queues up "set state to 6" three times. Since all three are working off the same stale counter (5), they all compute the same result. When React finally re-renders, counter becomes 6

    setCounter(prev => prev + 1);
    // prev gets assigned the latest queued/updated counter value,

    // console.log("increased", counter);    // updates counter after react re-renders the component
  }

  const decrease = () => {
    if(counter > 0)   setCounter(counter - 1);
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center align-center flex-col items-center gap-10 text-white bg-slate-950">

        <h2 className="text-4xl font-semibold">Counter Value: {counter}</h2>

        <button onClick={increase} 
        className="text-blue-400 hover:text-blue-700 border border-blue-400 p-2 rounded-2xl text-2xl cursor-pointer">
          Increase Value (curr: {counter})</button>

        <button onClick={decrease} 
        className="text-blue-400 hover:text-blue-700 border border-blue-400 p-2 rounded-2xl text-2xl cursor-pointer">
          Decrease Value (curr: {counter})</button>
      </div>

      <Link to="/" 
        className="bg-slate-800 text-xl text-white px-2 py-1 rounded-lg absolute bottom-15 left-1/2 -translate-x-1/2 shadow-2xl shadow-black/40 hover:bg-slate-700">
      ← Back to Projects
      </Link>
    </>
  )
}

export default Counter
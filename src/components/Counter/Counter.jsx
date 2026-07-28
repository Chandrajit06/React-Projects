import { useState } from 'react'

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
      <div className="w-full h-screen flex justify-center align-center flex-col items-center gap-10 text-3xl text-white bg-slate-950">

        <h2>Counter Value: {counter}</h2>
        <button onClick={increase} className="bg-slate-800 p-2 rounded-2xl cursor-pointer">
          Increase Value (curr: {counter})</button>
        <button onClick={decrease} className="bg-slate-800 p-2 rounded-2xl cursor-pointer">
          Decrease Value (curr: {counter})</button>
      </div>
    </>
  )
}

export default Counter
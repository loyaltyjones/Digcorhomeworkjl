import React from 'react'

function Stopwatch2() {
  // state to store time
  const [time, setTime] = useState(0);
   // state to check stopwatch running or not
   const [isRunning, setIsRunning] = useState(false);





  return (
    <div className="stopwatch-container">
    <p className="stopwatch-time">
      {hours}:{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}:
      {milliseconds.toString().padStart(2, "0")}
    </p>
    <div className="stopwatch-buttons">
      <button className="stopwatch-button" onClick={startAndStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button className="stopwatch-button" onClick={reset}>
        Reset
      </button>
    </div>
  </div>
  )
}

export default Stopwatch2
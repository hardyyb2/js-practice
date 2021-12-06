import React from "react";
import useTimer from "./useTimer";
import useTimer2 from "./useTimer2";

const Timer = () => {
  const { isRunning, reset, start, stop, seconds } = useTimer2(10);

  return (
    <div>
      <span>{seconds}</span>
      <br />
      <span>Running : {JSON.stringify(isRunning)} </span>
      <br />
      <button onClick={reset}>Reset</button>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

export default Timer;

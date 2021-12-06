import { useEffect, useState } from "react";

const useTimer = (totalTime) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === totalTime) {
          clearInterval(interval);
          setIsRunning(false);
          return;
        }

        setSeconds((prevValue) => prevValue + 1);
      }, 1000);
    }

    if (!isRunning && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, seconds, totalTime]);

  const stop = () => {
    if (!isRunning) return;
    setIsRunning(false);
  };

  const start = () => {
    if (isRunning) return;
    setIsRunning(true);
  };

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  if (!totalTime) {
    throw new Error("Please provide total time");
  }

  return { seconds, stop, start, reset, isRunning };
};

export default useTimer;

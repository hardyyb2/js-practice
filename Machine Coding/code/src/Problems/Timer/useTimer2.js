import { useEffect, useRef, useState } from "react";

const useTimer2 = (totalTime) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setSeconds((prevValue) => prevValue + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  useEffect(() => {
    if (seconds === totalTime) {
      stop();
    }
  }, [seconds, totalTime]);

  useEffect(() => {
    return () => timerRef && clearInterval(timerRef.current);
  });

  return { start, stop, reset, isRunning, seconds };
};

export default useTimer2;

import { useEffect, useState } from "react";

function useCountdown(second: number) {
  const [reseted, setReseted] = useState(false);
  const [time, setTime] = useState(second);
  const [isCountDownEnded, setIsCountDownEnded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((pervTime) => {
        if (pervTime <= 0) {
          setIsCountDownEnded(true);
          clearInterval(interval);

          return 0;
        } else {
          return pervTime - 1;
        }
      });
    }, 1000);

    setIsCountDownEnded(false);

    // Clear Interval after Component Unmounted
    return () => {
      clearInterval(interval);
    };
  }, [reseted]);

  const resetTime = () => {
    setReseted(true);
    setTime(second);
  };

  return { time, resetTime, isCountDownEnded };
}

export default useCountdown;

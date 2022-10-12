import React, { useEffect, useState } from "react";

function useCountdown(second: number) {
    const [time, setTime] = useState(second);
    const [isCountDownEnded, setIsCountDownEnded] = useState(false);

    useEffect(() => {
        if (time <= 0) {
            setIsCountDownEnded(true);
            return;
        }

        const interval = setInterval(
            () => setTime((pervTime) => pervTime - 1),
            1000
        );

        // Clear Interval after Component Unmounted
        return () => {
            setIsCountDownEnded(false);
            clearInterval(interval);
        };
    }, [time]);

    const resetTime = () => setTime(second);

    return { time, resetTime, isCountDownEnded };
}

export default useCountdown;

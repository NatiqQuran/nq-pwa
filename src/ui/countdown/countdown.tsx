import React, { useState, useEffect } from "react";

interface CountdownProps extends React.HTMLAttributes<HTMLSpanElement> {
    seconds: number;
    onCountdownEnded: Function;
}

function Countdown(props: CountdownProps) {
    const [time, setTime] = useState<number>(props.seconds);

    useEffect(() => {
        if (time <= 0) {
            props.onCountdownEnded();
            return;
        }

        const interval = setInterval(
            () => setTime((pervTime) => pervTime - 1),
            1000
        );

        // Clear Interval after Component Unmounted
        return () => clearInterval(interval);
    }, [time]);

    return <span {...props}>{time}</span>;
}

export default Countdown;

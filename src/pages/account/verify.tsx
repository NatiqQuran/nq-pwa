import { useEffect, useState } from "react";

interface CountdownProps {
    count: number;
    children: JSX.Element;
    onCountdownEnded: Function;
}

const Countdown = (props: CountdownProps) => {
    const [time, setTime] = useState<number>(props.count);

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

    return (
        <div>
            {props.children}
            {time}
        </div>
    );
};

function Verify(props: { data: any; setData: any }) {
    return (
        <>
            <input
                name="code"
                type="number"
                placeholder="code"
                onChange={() => null}
            />
            <Countdown count={5} onCountdownEnded={() => console.log("Ended")}>
                <h1>Remaining time: </h1>
            </Countdown>
        </>
    );
}

export default Verify;

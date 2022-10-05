import { useFetch, useHandleInput } from "library";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Button } from "ui";

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

interface AccountVerifyCode {
    email?: string;
    code?: number;
}

function Verify() {
    const location = useLocation();
    const [data, setData] = useState<AccountVerifyCode>({
        email: (location.state as any).email,
    });
    const fetch = useFetch("http://localhost:8080/account/verify/1", {
        method: "POST",
        body: JSON.stringify(data),
    });
    const handler = useHandleInput(setData);

    return (
        <Container>
            <input
                name="code"
                type="number"
                placeholder="code"
                onChange={handler.handleInput}
            />
            <Countdown count={70} onCountdownEnded={() => alert("Ended")}>
                <h1>Remaining time: </h1>
            </Countdown>

            <Button onClick={fetch.send}>verify</Button>
        </Container>
    );
}

export default Verify;

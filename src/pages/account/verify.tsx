import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch, useHandleInput } from "library";
import { Container, Button, Form } from "ui";

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
    const [countDownEnded, setCountDownEnded] = useState<boolean>(false);

    const fetch = useFetch("http://localhost:8080/account/verify/1", {
        method: "POST",
        body: JSON.stringify(data),
    });
    const handler = useHandleInput(setData);

    return (
        <Container>
            <Form onChange={handler.handleInput} onSubmit={fetch.send}>
                <input name="code" type="number" placeholder="code" />

                <Countdown
                    count={70}
                    onCountdownEnded={() => setCountDownEnded(true)}
                >
                    <h1>Remaining time: </h1>
                </Countdown>

                <Button>verify</Button>

                {countDownEnded ? <Button>Resend</Button> : null}
            </Form>
        </Container>
    );
}

export default Verify;

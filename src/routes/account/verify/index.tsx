import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch, useFormDataHandle } from "library";
import { Container, Button, Form } from "ui";

const COUNTDOWN_SECONDS = 10;

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

    const resendFetch = useFetch("http://localhost:8080/account/sendCode/1", {
        method: "POST",
        body: JSON.stringify({ email: data.email }),
    });
    const formDataHandler = useFormDataHandle(setData);

    return (
        <Container>
            <Form
                onChange={formDataHandler.handle}
                onSubmit={countDownEnded ? resendFetch.send : fetch.send}
            >
                <input name="code" type="number" placeholder="code" />

                <Countdown
                    count={COUNTDOWN_SECONDS}
                    onCountdownEnded={() => setCountDownEnded(true)}
                >
                    <h1>Remaining time: </h1>
                </Countdown>

                {countDownEnded ? <Button>Resend</Button> : null}
                <Button>verify</Button>
            </Form>
        </Container>
    );
}

export default Verify;

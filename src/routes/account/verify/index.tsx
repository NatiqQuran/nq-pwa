import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch, useFormDataHandle } from "library";
import { Container, Button, Form, Countdown } from "ui";

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

    const verifyFetch = useFetch("http://localhost:8080/account/verify/1", {
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
            <Form onChange={formDataHandler.handle} onSubmit={verifyFetch.send}>
                <input name="code" type="number" placeholder="code" />
            </Form>
            <h1>
                Remaining time:
                <Countdown
                    seconds={10}
                    onCountdownEnded={() => setCountDownEnded(true)}
                />
            </h1>

            <Button>Get back</Button>
            {countDownEnded ? (
                <Button onClick={resendFetch.send}>Resend</Button>
            ) : null}
            <Button onClick={verifyFetch.send}>verify</Button>
        </Container>
    );
}

export default Verify;

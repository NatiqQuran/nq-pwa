import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch, useFormDataHandle } from "library";
import { Button, Form, Spacer, HistoryBack, Stack, Row } from "ui";
import useCountDown from "./useCountdown";

interface AccountVerifyCode {
    email?: string;
    code?: number;
}

function Verify() {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState<AccountVerifyCode>({
        email: !(location.state as AccountVerifyCode)
            ? ""
            : (location.state as AccountVerifyCode).email,
    });

    if (data.email === "") {
        navigate("/account/login", { replace: true });
    }

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
        <Stack style={{ alignItems: "center" }}>
            <div style={{ width: "100%" }}>
                <h3>Enter your code</h3>
                <span style={{ color: "#7d7d7d" }}>
                    We sended a code to your email <b>{data.email}</b>.
                </span>
            </div>

            <Form onChange={formDataHandler.handle} onSubmit={verifyFetch.send}>
                <input name="code" type="number" placeholder="code" />
            </Form>

            <Row style={{ width: "100%" }}>
                <span>Remaining time: {countDown.time}</span>
                <Spacer />
                {countDown.isCountDownEnded ? (
                    <Button
                        variant="text"
                        onClick={() => {
                            countDown.resetTime();
                            resendFetch.send();
                        }}
                    >
                        Resend
                    </Button>
                ) : null}
            </Row>
            <Button
                variant="filled"
                onClick={verifyFetch.send}
                style={{ width: "100%" }}
            >
                Verify code
            </Button>
            <HistoryBack>
                <Button>Get back</Button>
            </HistoryBack>
        </Stack>
    );
}

export default Verify;

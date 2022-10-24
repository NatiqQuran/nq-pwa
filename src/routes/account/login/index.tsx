import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, HistoryBack, Stack } from "ui";
import { useFetch, useFormDataHandle } from "library";

interface AccountSendCode {
    email?: string;
}

function Login() {
    const [data, setData] = useState<AccountSendCode>({});
    const navigate = useNavigate();

    const formDataHandler = useFormDataHandle(setData);
    const fetch = useFetch("http://localhost:8080/account/sendCode/1", {
        method: "POST",
        body: JSON.stringify(data),
    });

    useEffect(() => {
        if (fetch.response?.status === 200) {
            navigate("/account/verify", {
                replace: true,
                state: { email: data.email },
            });
        }
    }, [fetch.response]);

    return (
        <Stack style={{ alignItems: "center" }}>
            <div>
                <h5>Enter email to SignIn or Register account. </h5>
                <h3>{fetch.error?.message}</h3>
                <h4>{fetch.loading ? "Loading" : ""}</h4>
            </div>

            <Form onSubmit={fetch.send} onChange={formDataHandler.handle}>
                <input name="email" type="email" placeholder="email" />
                <Button
                    variant="filled"
                    style={{ width: "100%", justifyContent: "center" }}
                >
                    Get verify code
                </Button>
            </Form>

            <HistoryBack>
                <Button>Cancel</Button>
            </HistoryBack>
        </Stack>
    );
}

export default Login;

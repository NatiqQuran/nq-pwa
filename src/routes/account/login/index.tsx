import React, { useEffect, useState } from "react";
import { Button, Form } from "ui";
import { useNavigate } from "react-router-dom";
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
        <div>
            <h1>Login page</h1>
            <h3>{fetch.error?.message}</h3>
            <h4>{fetch.loading ? "Loading" : ""}</h4>

            <Form onSubmit={fetch.send} onChange={formDataHandler.handle}>
                <input name="email" type="email" placeholder="email" />
                <Button variant="outlined">Send</Button>
            </Form>
        </div>
    );
}

export default Login;

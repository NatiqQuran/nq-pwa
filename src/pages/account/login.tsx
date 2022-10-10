import React, { useEffect, useState } from "react";
import { Button, Form } from "ui";
import { useFetch, useHandleInput } from "library";
import { Navigate } from "react-router-dom";

interface AccountSendCode {
    email?: string;
}

function Login() {
    const [codeSended, setCodeSended] = useState(false);
    const [data, setData] = useState<AccountSendCode>({});

    const handler = useHandleInput(setData);
    const fetch = useFetch("http://localhost:8080/account/sendCode/1", {
        method: "POST",
        body: JSON.stringify(data),
    });

    useEffect(() => {
        if (fetch.response?.status === 200) {
            setCodeSended(true);
        } else {
            setCodeSended(false);
        }
    }, [fetch.response]);

    return (
        <div>
            <h1>Login page</h1>
            <h3>{fetch.error?.message}</h3>
            <h5>
                {handler.target?.validity.valid === false
                    ? `${handler.target.name} Input is not valid`
                    : null}
            </h5>
            <h4>{fetch.loading ? "Loading" : ""}</h4>

            <Form onSubmit={fetch.send} onChange={handler.handleInput}>
                <input name="email" type="email" placeholder="email" />
                <Button variant="outlined">Send</Button>
            </Form>

            {codeSended ? (
                <Navigate
                    to={`/account/verify`}
                    replace
                    state={{ email: data.email }}
                />
            ) : null}
        </div>
    );
}

export default Login;

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, Container } from "ui";
import { useFetch, useHandleInput } from "library";

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
        <Container>
            <h5>Enter email to SignIn or Register account. </h5>
            <h3>{fetch.error?.message}</h3>
            <h5>
                {handler.target?.validity.valid === false
                    ? `${handler.target.name} Input is not valid`
                    : null}
            </h5>
            <h4>{fetch.loading ? "Loading" : ""}</h4>
            {/* This can be a form tag but standard form tag doesnt have a prevent default */}

            <input
                name="email"
                type="email"
                placeholder="email"
                onChange={handler.handleInput}
            />
            {handler.target?.validity.valid ? (
                <Button
                    variant="filled"
                    onClick={fetch.send}
                    style={{ width: "100%" }}
                >
                    Send
                </Button>
            ) : null}

            {codeSended ? (
                <Navigate
                    to={`/account/verify`}
                    replace
                    state={{ email: data.email }}
                />
            ) : null}
        </Container>
    );
}

export default Login;

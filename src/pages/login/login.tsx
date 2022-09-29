import { useFetch } from "library";
import React, { useMemo } from "react";
import { Button } from "ui";

function Login() {
    const { changeUrl, updateRequestBody, response, send, loading, error } =
        useFetch("http://localhost:8080/account/sendCode/1", {
            // This property will never changed
            method: "POST",
        });

    const handleInput = (e: any) =>
        updateRequestBody({ [e.target.name]: e.target.value });

    const isCodeSended = useMemo(() => {
        if (response?.status === 200) {
            changeUrl("http://localhost:8080/account/verify/1");
        }
        return response?.status === 200;
    }, [response]);

    return (
        <div>
            <h1>Login page</h1>

            <h3>{error?.message}</h3>
            <h4>{loading ? "Loading" : ""}</h4>
            {/* This can be a form tag but standard form tag doesnt have a prevent default */}
            <div>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={handleInput}
                />
                {isCodeSended ? (
                    <input
                        name="code"
                        type="number"
                        placeholder="code"
                        onChange={handleInput}
                    />
                ) : (
                    ""
                )}
                <Button variant="outlined" onClick={send}>
                    Send
                </Button>
            </div>
        </div>
    );
}

export default Login;

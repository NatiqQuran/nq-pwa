import React, { useEffect, useState } from "react";
import { Button } from "ui";
import { useFetch, useHandleInput } from "library";
import { Navigate } from "react-router-dom";

function Login<T, U>(props: { data: T; setData: React.Dispatch<React.SetStateAction<U>> }) {
    const [codeSended, setCodeSended] = useState(false);

    const handler = useHandleInput(props.setData);
    const fetch = useFetch("http://localhost:8080/", { method: "POST", body: JSON.stringify(props.data) });

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
            <h5>{handler.target?.validity.valid === false ? `${handler.target.name} Input is not valid`: null}</h5>
            <h4>{fetch.loading ? "Loading" : ""}</h4>
            {/* This can be a form tag but standard form tag doesnt have a prevent default */}
            <div>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={handler.handleInput}
                />
                {handler.target?.validity.valid ? <Button
                    variant="outlined"
                    onClick={fetch.send}
                >
                    Send
                </Button> : null}
            </div>

            {codeSended ? (
                <Navigate to={`/account/verify`} replace state={{ y: "y" }} />
            ) : null}
        </div>
    );
}

export default Login;

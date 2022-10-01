import React, { useEffect, useState } from "react";
import { useFetch } from "library";
import { Button } from "ui";

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

function Login() {
    const [codeSended, setCodeSended] = useState<boolean>(false);
    const { changeUrl, updateRequestBody, response, send, loading, error } =
        useFetch("http://localhost:8080/account/sendCode/1", {
            // This property will never changed
            method: "POST",
        });

    const handleEmailInput = (e: any) =>
        updateRequestBody({ email: e.target.value });

    const handleCodeInput = (e: any) =>
        updateRequestBody({ code: parseInt(e.target.value, 10) }); // Parse The Code value to number.

    useEffect(() => {
        if (response?.status === 200) {
            setCodeSended(true);
            changeUrl("http://localhost:8080/account/verify/1");
        }
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
                    onChange={handleEmailInput}
                />
                {codeSended ? (
                    <>
                        <input
                            name="code"
                            type="number"
                            placeholder="code"
                            onChange={handleCodeInput}
                        />
                        <Countdown
                            count={5}
                            onCountdownEnded={() => setCodeSended(false)}
                        >
                            <h1>Remaining time: </h1>
                        </Countdown>
                    </>
                ) : (
                    ""
                )}
                <Button
                    variant="outlined"
                    onClick={() => {
                        setCodeSended(true);
                        send();
                    }}
                >
                    Send
                </Button>
            </div>
        </div>
    );
}

export default Login;

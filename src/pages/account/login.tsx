import { useEffect, useState } from "react";
import { Button } from "ui";
import { useFetch } from "library";
import { Navigate } from "react-router-dom";

function Login(props: { data: any; setData: any }) {
    const [codeSended, setCodeSended] = useState(false);
    const fetch = useFetch("http://localhost:8080/account/sendCode/1", {
        method: "POST",
    });

    const handleEmailInput = (e: any) =>
        props.setData((data: any) => ({ ...data, email: e.target.value }));

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
            <h4>{fetch.loading ? "Loading" : ""}</h4>
            {/* This can be a form tag but standard form tag doesnt have a prevent default */}
            <div>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={handleEmailInput}
                />
                <Button
                    variant="outlined"
                    onClick={() => {
                        fetch.setRequestBody(props.data);
                        fetch.send();
                    }}
                >
                    Send
                </Button>
            </div>

            {codeSended ? (
                <Navigate to={`/account/verify`} replace state={{ y: "y" }} />
            ) : null}
        </div>
    );
}

export default Login;

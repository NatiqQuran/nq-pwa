import React, { useState } from "react";
import { Header } from "../../components/components";
import useFetch from "../../useFetch";

function Intro() {
    const [button, setButton] = useState<"back" | "menu">("menu");

    const { body, send, response, error, loading } = useFetch(
        "http://127.0.0.1/status"
    );

    return (
        <div>
            <Header title="HelloWorld" button={button}>
                <button onClick={send}>Button</button>
            </Header>
            <h1>{loading ? "loading" : "NULL"}</h1>
            <br />
            <h1>{body ? (body as string) : "Not found"}</h1>
            <br />
            <h2>Status Code: {response?.status}</h2>
            <br />
            <h4>If any Error: {error?.message}</h4>
        </div>
    );
}

export default Intro;

import React, { useMemo, useState } from "react";
import { Header } from "../../components/components";
import useFetch from "../../useFetch";

function Intro() {
    const [button, setButton] = useState<"back" | "menu">("menu");

    const { body, send, response } = useFetch("http://127.0.0.1:8080/status");

    return (
        <div>
            <Header title="HelloWorld" button={button}>
                <button onClick={send}>Button</button>
            </Header>
            <h1>{body ? (body as string) : "Not found"}</h1>
            <br />
            <h2>Status Code: {response?.status}</h2>
        </div>
    );
}

export default Intro;

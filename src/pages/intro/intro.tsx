import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "library";
import { Header } from "components";

function Intro() {
    const { body, send, response, error, loading } = useFetch(
        "http://127.0.0.1/status"
    );

    return (
        <div>
            <Header title="HelloWorld" button={"menu"}>
                <Link to="/quran">
                    <button onClick={send}>Quran</button>
                </Link>
                <Link to="/pwa">
                    <button onClick={send}>PWA</button>
                </Link>
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

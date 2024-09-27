import { useState } from "react";
import { Theme } from "@yakad/ui";
import Router from "./router";
import "./assets/css/style.css";
import { Connection } from "@ntq/sdk";
import { ConnectionContext } from "contexts";


export default function App() {
    const [connection, _setConnection] = useState(new Connection([
        new URL(process.env.API_URL || "https://api.natiq.net"),
    ], ""));

    return (
        <Theme>
            <ConnectionContext.Provider value={connection}>
                <Router />
            </ConnectionContext.Provider>
        </Theme>
    );
}

import { useState } from "react";
import { Connection } from "@ntq/sdk";
import { Theme } from "@yakad/ui";

import Router from "./router";
import { ConnectionContext } from "./contexts";
import "./assets/css/style.css";

export default function App() {
    const [connection, _setConnection] = useState(
        new Connection([
            new URL(process.env.REACT_APP_API_URL || "https://api.natiq.net"),
        ])
    );

    return (
        <Theme>
            <ConnectionContext.Provider value={connection}>
                <Router />
            </ConnectionContext.Provider>
        </Theme>
    );
}

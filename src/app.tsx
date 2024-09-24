import { createContext, useContext } from "react";
import { Theme } from "@yakad/ui";
import Router from "./router";
import "./assets/css/style.css";

export default function App() {
    return (
        <Theme>
            <Router />
        </Theme>
    );
}

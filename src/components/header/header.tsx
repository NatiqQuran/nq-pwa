import React from "react";
import { ReactComponent as Humburger } from "../../assets/svg/humburger.svg";
import "./header.css";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    button: "menu" | "back" | null;
}

function Header(props: HeaderProps) {
    return (
        <header>
            <button>
                {props.button === "menu" ? (
                    <Humburger />
                ) : props.button === "back" ? (
                    "BACK"
                ) : null}
            </button>
            <h1 style={{ marginInlineEnd: "auto" }}>{props.title}</h1>

            {props.children}
        </header>
    );
}

export default Header;

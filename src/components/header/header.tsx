import React from "react";
import { ReactComponent as HumburgerIcon } from "../../assets/svg/humburger.svg";
import { ReactComponent as BackIcon } from "../../assets/svg/back.svg";
import "./header.css";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    button: "menu" | "back" | null;
    buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Header(props: HeaderProps) {
    return (
        <header>
            {props.button === "menu" ? (
                <button onClick={props.buttonOnClick}>
                    <HumburgerIcon />
                </button>
            ) : props.button === "back" ? (
                <button onClick={props.buttonOnClick}>
                    <BackIcon />
                </button>
            ) : null}
            <h1 style={{ marginInlineEnd: "auto" }}>{props.title}</h1>

            {props.children}
        </header>
    );
}

export default Header;

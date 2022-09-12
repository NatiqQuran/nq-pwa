import React from "react";
import "./header.css";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}

function Header(props: HeaderProps) {
    return (
        <header>
            {"Icon"}
            <h1 style={{ marginInlineEnd: "auto" }}>{props.title}</h1>

            {props.children}
        </header>
    );
}

export default Header;

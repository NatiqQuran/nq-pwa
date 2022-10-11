import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./header.module.css";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    direction?: "column" | "column-reverse" | "row" | "row-reverse";
    gap?: number;
}

function Header(props: HeaderProps) {
    const joinedClassNames = joinClassNames(styles.appBar, props.className!);

    const joinedStyles = joinStyles(
        props.direction
            ? { flexDirection: props.direction }
            : { flexDirection: "row" },
        props.gap ? { gap: props.gap + "rem" } : {},
        props.style!
    );

    return (
        <header {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children}
        </header>
    );
}

export default Header;

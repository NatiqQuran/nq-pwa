import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./main.module.css";

interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: "column" | "column-reverse" | "row" | "row-reverse";
    navOpen?: boolean;
    gap?: number;
}

function Main(props: MainProps) {
    const navOpenClass = props.navOpen ? styles.navOpen : "";

    const joinedClassNames = joinClassNames(
        styles.main,
        navOpenClass,
        props.className!
    );

    const joinedStyles = joinStyles(
        props.direction
            ? { flexDirection: props.direction }
            : { flexDirection: "column" },
        props.gap ? { gap: props.gap + "rem" } : {},
        props.style!
    );

    return (
        <main {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children}
        </main>
    );
}

export default Main;

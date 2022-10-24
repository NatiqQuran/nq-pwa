import React from "react";
import { joinClassNames } from "library";
import styles from "./navigation.module.css";

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
    anchor?: "left" | "right" | "top" | "bottom" | "auto";
    open: boolean;
}

function Navigation(props: NavigationProps) {
    const joinedClassNames = joinClassNames(
        styles.navigation,
        props.anchor ? styles[props.anchor] : styles.auto,
        props.open ? styles.open : ""
    );

    return (
        <nav {...props} className={joinedClassNames}>
            {props.children}
        </nav>
    );
}

export default Navigation;

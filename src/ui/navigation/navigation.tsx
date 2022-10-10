import React from "react";
import { joinClassNames } from "library";
import styles from "./navigation.module.css";

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
    open: boolean;
}

function Navigation(props: NavigationProps) {
    const joinedClassNames = joinClassNames(
        styles.navigation,
        props.open ? styles.open : ""
    );

    return (
        <nav {...props} className={joinedClassNames}>
            {props.children}
        </nav>
    );
}

export default Navigation;

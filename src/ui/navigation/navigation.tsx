import React, { useMemo } from "react";
import { classnames } from "library";
import styles from "./navigation.module.css";

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
}

function Navigation(props: NavigationProps) {
    return (
        <nav
            className={classnames(
                styles.navigation,
                props.open ? styles.open : ""
            )}
        >
            {props.children}
        </nav>
    );
}

export default Navigation;

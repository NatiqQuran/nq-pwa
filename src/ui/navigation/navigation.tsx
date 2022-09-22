import React, { useMemo } from "react";
import { joinClassNames } from "library";
import styles from "./navigation.module.css";

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
}

function Navigation(props: NavigationProps) {
    const classNames = joinClassNames(
        styles.navigation,
        props.open ? styles.open : ""
    );

    return <nav className={classNames}>{props.children}</nav>;
}

export default Navigation;

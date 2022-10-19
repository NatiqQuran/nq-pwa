import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./appBar.module.css";

function AppBar(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.header, props.className!);

    return (
        <header {...props} className={joinedClassNames}>
            {props.children}
        </header>
    );
}

export default AppBar;

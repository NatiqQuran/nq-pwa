import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./header.module.css";

function Header(props: React.HTMLAttributes<HTMLElement>) {
    const joinedClassNames = joinClassNames(styles.header, props.className!);

    return (
        <header {...props} className={joinedClassNames}>
            {props.children}
        </header>
    );
}

export default Header;

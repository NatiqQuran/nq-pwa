import React from "react";
import { joinClassNames } from "library";
import styles from "./header.module.css";

function Header(props: React.HTMLAttributes<HTMLDivElement>) {
    const joinedClassNames = joinClassNames(styles.appBar, props.className!);

    return (
        <header {...props} className={joinedClassNames}>
            {props.children}
        </header>
    );
}

export default Header;

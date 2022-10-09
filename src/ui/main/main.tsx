import React from "react";
import { joinClassNames } from "library";
import styles from "./main.module.css";

interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
    navOpen?: boolean;
}

function Main(props: MainProps) {
    const navOpenClass = props.navOpen ? styles.navOpen : "";

    const joinedClassNames = joinClassNames(
        styles.main,
        navOpenClass,
        props.className!
    );

    return (
        <main className={joinedClassNames} {...props}>
            {props.children}
        </main>
    );
}

export default Main;

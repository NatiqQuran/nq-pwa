import React from "react";
import styles from "./main.module.css";
import { joinClassNames } from "library";

interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
}

function Main(props: MainProps) {
    const variantStyle = props.open ? styles.open : "";

    const classNames = joinClassNames(
        styles.main,
        variantStyle,
        props.className!
    );

    return (
        <main {...props} className={classNames}>
            {props.children}
        </main>
    );
}

export default Main;

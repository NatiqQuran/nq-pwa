import React from "react";
import styles from "./main.module.css";
import { classnames } from "library";

interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
}

function Main(props: MainProps) {
    const variantStyle = props.open ? styles.open : "";

    const classes = classnames(styles.main, variantStyle, props.className!);

    return (
        <main {...props} className={classes}>
            {props.children}
        </main>
    );
}

export default Main;

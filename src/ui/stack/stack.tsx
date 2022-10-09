import React from "react";
import styles from "./stack.module.css";

function Stack(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={styles.stack} {...props}>
            {props.children}
        </div>
    );
}

export default Stack;

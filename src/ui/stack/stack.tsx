import React from "react";
import styles from "./stack.module.css";

function Stack(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className={styles.stack}>
            {props.children}
        </div>
    );
}

export default Stack;

import React from "react";
import styles from "./stack.module.css";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {}

function Stack(props: StackProps) {
    return (
        <div className={styles.stack} {...props}>
            {props.children}
        </div>
    );
}

export default Stack;

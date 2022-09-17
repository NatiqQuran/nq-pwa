import React from "react";
import styles from "./stack.module.css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

// Custom Button Element
function Stack(props: ContainerProps) {
    return <div className={styles.stack}>{props.children}</div>;
}

export default Stack;

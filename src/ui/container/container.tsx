import React from "react";
import styles from "./container.module.css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: string | null;
}

// Custom Button Element
function Container(props: ContainerProps) {
    return (
        <div
            className={styles.container}
            style={props.maxWidth ? { maxWidth: props.maxWidth } : {}}
        >
            {props.children}
        </div>
    );
}

export default Container;

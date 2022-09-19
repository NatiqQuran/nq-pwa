import React from "react";
import styles from "./container.module.css";

type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: ScreenSize;
}

function maxWidthClass(maxWidth: ScreenSize | undefined) {
    return maxWidth ? styles[maxWidth] : "";
}

function Container(props: ContainerProps) {
    return (
        <div
            className={styles.container + " " + maxWidthClass(props.maxWidth)}
            {...props}
        >
            {props.children}
        </div>
    );
}

export default Container;

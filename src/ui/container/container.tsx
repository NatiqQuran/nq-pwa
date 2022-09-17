import React from "react";
import styles from "./container.module.css";

type ScreenSizes = "xs" | "sm" | "md" | "lg" | "xl";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: ScreenSizes;
}

function maxWidthClass(maxWidth: ScreenSizes | undefined) {
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

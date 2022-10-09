import React from "react";
import { joinClassNames } from "library";
import styles from "./container.module.css";

type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: ScreenSize;
}

function Container(props: ContainerProps) {
    const joinedClassNames = joinClassNames(
        props.maxWidth ? styles[props.maxWidth] : "",
        styles.container,
        props.className!
    );
    return (
        <div className={joinedClassNames} {...props}>
            {props.children}
        </div>
    );
}

export default Container;

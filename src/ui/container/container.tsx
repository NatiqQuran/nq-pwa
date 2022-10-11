import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./container.module.css";

type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: ScreenSize;
    direction?: "column" | "column-reverse" | "row" | "row-reverse";
    gap?: number;
}

function Container(props: ContainerProps) {
    const joinedClassNames = joinClassNames(
        props.maxWidth ? styles[props.maxWidth] : "",
        styles.container,
        props.className!
    );

    const joinedStyles = joinStyles(
        props.direction
            ? { flexDirection: props.direction }
            : { flexDirection: "column" },
        props.gap ? { gap: props.gap + "rem" } : {},
        props.style!
    );

    return (
        <div {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children}
        </div>
    );
}

export default Container;

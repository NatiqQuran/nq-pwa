import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./stack.module.css";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: "column" | "column-reverse" | "row" | "row-reverse";
    gap?: number;
}

function Stack(props: StackProps) {
    const joinedClassNames = joinClassNames(styles.stack, props.className!);

    const joinedStyles = joinStyles(
        props.direction
            ? { flexDirection: props.direction }
            : { flexDirection: "column" },
        { gap: props.gap ? props.gap + "rem" : "1.5rem" },
        props.style!
    );

    return (
        <div {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children}
        </div>
    );
}

export default Stack;

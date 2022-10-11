import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./row.module.css";

interface rowProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: number;
}

function Row(props: rowProps) {
    const joinedClassNames = joinClassNames(styles.row, props.className!);

    const joinedStyles = joinStyles(
        props.gap ? { gap: props.gap + "rem" } : {},
        props.style!
    );

    return (
        <div {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children}
        </div>
    );
}

export default Row;

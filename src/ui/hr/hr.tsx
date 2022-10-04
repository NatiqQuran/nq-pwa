import React from "react";
import styles from "./hr.module.css";
import { joinClassNames, joinStyles } from "library";

interface HrProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "dotted" | "dashed" | "shortLine";
    height?: number;
    spacing?: number;
}

function Hr(props: HrProps) {
    const joinedClassNames = joinClassNames(
        styles.hr,
        props.variant ? styles[props.variant] : "",
        props.className!
    );

    const joinedStyles = joinStyles(
        props.height ? { borderTopWidth: props.height + "rem" } : {},
        props.spacing
            ? joinStyles(
                  { marginTop: props.spacing + "rem" },
                  { marginBottom: props.spacing + "rem" }
              )
            : {},
        props.style!
    );

    return (
        <hr {...props} className={joinedClassNames} style={joinedStyles}></hr>
    );
}

export default Hr;

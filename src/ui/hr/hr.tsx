import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./hr.module.css";

interface HrProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "dotted" | "dashed" | "shortLine";
    height?: number;
    marginTopBottom?: number;
}

function Hr(props: HrProps) {
    const joinedClassNames = joinClassNames(
        styles.hr,
        props.variant ? styles[props.variant] : "",
        props.className!
    );

    const joinedStyles = joinStyles(
        props.height ? { borderTopWidth: props.height + "rem" } : {},
        props.marginTopBottom
            ? joinStyles(
                  { marginTop: props.marginTopBottom + "rem" },
                  { marginBottom: props.marginTopBottom + "rem" }
              )
            : {},
        props.style!
    );

    return (
        <hr {...props} className={joinedClassNames} style={joinedStyles}></hr>
    );
}

export default Hr;

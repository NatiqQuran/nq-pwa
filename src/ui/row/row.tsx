import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./row.module.css";

function Row(props: React.HTMLAttributes<HTMLDivElement>) {
    const joinedClassNames = joinClassNames(styles.row, props.className!);

    return (
        <div {...props} className={joinedClassNames}>
            {props.children}
        </div>
    );
}

export default Row;

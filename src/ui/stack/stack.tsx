import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./stack.module.css";

function Stack(props: React.HTMLAttributes<HTMLDivElement>) {
    const joinedClassNames = joinClassNames(styles.stack, props.className!);

    return (
        <div {...props} className={joinedClassNames}>
            {props.children}
        </div>
    );
}

export default Stack;

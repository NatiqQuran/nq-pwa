import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./page.module.css";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: "column" | "column-reverse" | "row" | "row-reverse";
    gap?: number;
}

function Page(props: PageProps) {
    const joinedClassNames = joinClassNames(styles.page, props.className!);

    const joinedStyles = joinStyles(
        props.direction
            ? { flexDirection: props.direction }
            : { flexDirection: "column" },
        { gap: props.gap ? props.gap + "rem" : "initial" },
        props.style!
    );

    return (
        <div {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children}
        </div>
    );
}

export default Page;

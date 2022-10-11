import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./footer.module.css";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    direction?: "column" | "column-reverse" | "row" | "row-reverse";
    gap?: number;
}

function Footer(props: FooterProps) {
    const joinedClassNames = joinClassNames(styles.footer, props.className!);

    const joinedStyles = joinStyles(
        props.direction
            ? { flexDirection: props.direction }
            : { flexDirection: "row" },
        { gap: props.gap ? props.gap + "rem" : "1.5rem" },
        props.style!
    );

    return (
        <footer {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children}
        </footer>
    );
}

export default Footer;

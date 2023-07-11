import React from "react";
import { joinClassNames, joinStyles } from "@yakad/lib";
import styles from "./theme.module.css";

interface ThemeProps extends React.HTMLAttributes<HTMLElement> {
    mode?: "light" | "dark" | "system";
    color?: "green" | "pink" | "growth" | "blue" | "purple";
    zoom?: number;
}

function Theme(props: ThemeProps) {
    const zoomPercentage = props.zoom ? props.zoom / 100 * 62.5 : 62.5;
    document.documentElement.style.setProperty('font-size', zoomPercentage + '%');

    const joinedClassNames = joinClassNames(
        props.mode ? styles[props.mode] : styles.system,
        props.color ? styles[props.color] : styles.blue,
        props.className!
    );

    return (
        <div {...props} className={joinedClassNames}>
            {props.children}
        </div>
    );
}

export default Theme;
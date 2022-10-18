import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./svgIcon.module.css";

interface SvgIconProps extends React.HTMLAttributes<HTMLElement> {
    color?:
        | "onBackground"
        | "onHeader"
        | "onPrimaryColor"
        | "onSecondaryColor"
        | "onSurfaceColor"
        | "onErrorColor";
    size?: number;
}

function SvgIcon(props: SvgIconProps) {
    const colorStyle = props.color ? styles[props.color] : "";

    const joinedClassNames = joinClassNames(
        styles.svg,
        colorStyle,
        props.className!
    );

    const joinedStyles = joinStyles(
        props.size
            ? { width: props.size + "rem", height: props.size + "rem" }
            : { width: "2.4rem", height: "2.4rem" },
        props.style!
    );

    return (
        <div {...props} className={joinedClassNames} style={joinedStyles}>
            {props.children}
        </div>
    );
}

export default SvgIcon;

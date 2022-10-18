import React from "react";
import { joinClassNames } from "library";
import styles from "./button.module.css";
import SvgIcon from "ui/svgIcon/svgIcon";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: "text" | "outlined" | "filled" | "tonal" | "elevated";
    icon?: JSX.Element;
}

function Button(props: ButtonProps) {
    const joinedClassNames = joinClassNames(
        styles.button,
        props.variant ? styles[props.variant] : styles.text,
        props.icon && !props.children ? styles.iconButton : "",
        props.className!
    );

    return (
        <button {...props} className={joinedClassNames}>
            {props.icon ? <SvgIcon>{props.icon}</SvgIcon> : null}
            {props.children}
        </button>
    );
}

export default Button;

import { joinClassNames } from "library";
import React from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: "outlined" | "text" | "filled";
}

function Button(props: ButtonProps) {
    const variantStyle = props.variant ? styles[props.variant] : styles.text;

    const joinedClassNames = joinClassNames(
        styles.button,
        variantStyle,
        props.className!
    );

    return (
        <button {...props} className={joinedClassNames}>
            {props.children}
        </button>
    );
}

export default Button;

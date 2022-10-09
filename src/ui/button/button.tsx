import React from "react";
import { joinClassNames } from "library";
import styles from "./button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: "text" | "outlined" | "filled";
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

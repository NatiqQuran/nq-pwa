import { classnames } from "library";
import React from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: "outlined" | "text";
}

function Button(props: ButtonProps) {
    const variantStyle =
        props.variant === "outlined"
            ? styles.buttonOutlined
            : styles.buttonText;

    const classes = classnames(styles.button, variantStyle, props.className!);

    return (
        <button {...props} className={classes}>
            {props.children}
        </button>
    );
}

export default Button;

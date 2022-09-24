import { joinClassNames } from "library";
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

    const classNames = joinClassNames(
        styles.button,
        variantStyle,
        props.className!
    );

    return (
        <button {...props} className={classNames}>
            {props.children}
        </button>
    );
}

export default Button;

import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./inputField.module.css";

interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    variant?: "standard" | "outlined" | "filled";
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
}

function InputField(props: InputFieldProps) {
    const joinedClassNames = joinClassNames(
        styles.input,
        props.variant ? styles[props.variant] : styles.standard,
        props.className!
    );

    return (
        <label className={styles.field}>
            <input
                {...props}
                name={props.name}
                disabled={props.disabled}
                placeholder="&nbsp;"
                type={props.type}
                className={joinedClassNames}
            />
            <span className={styles.placeholder}>{props.placeholder}</span>
        </label>
    );
}

export default InputField;

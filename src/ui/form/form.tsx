import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./form.module.css";

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    gap?: number;
}

function Form(props: FormProps) {
    const joinedClassNames = joinClassNames(styles.form, props.className!);

    const joinedStyles = joinStyles(
        props.gap ? { gap: props.gap + "rem" } : {},
        props.style!
    );
    return (
        <form
            {...props}
            className={joinedClassNames}
            style={joinedStyles}
            onSubmit={(e) => {
                e.preventDefault();

                props.onSubmit!(null as any);
            }}
        >
            {props.children}
        </form>
    );
}

export default Form;

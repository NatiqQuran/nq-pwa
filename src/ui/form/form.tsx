import React from "react";
import { joinClassNames, joinStyles } from "library";
import styles from "./form.module.css";

function Form(props: React.HTMLAttributes<HTMLFormElement>) {
    const joinedClassNames = joinClassNames(styles.form, props.className!);

    return (
        <form
            {...props}
            className={joinedClassNames}
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

import React from "react";

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {}

function Form(props: FormProps) {
    // Change and overwrite some props
    const formProps: FormProps = {
        ...props,
        onSubmit: (e) => {
            // this can be a optional in the props
            e.preventDefault();

            props.onSubmit!(null as any);
        },
    };

    return <form {...formProps}>{props.children}</form>;
}

export default Form;

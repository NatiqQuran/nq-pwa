import React from "react";

function Form(props: React.HTMLAttributes<HTMLFormElement>) {
    return (
        <form
            {...props}
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

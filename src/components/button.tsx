import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // Custom Attributes
}

// Default attributes for Button
const defaultProps: ButtonProps = {
    style: {
        background: "red",
    },
};

// Custom Button Element
function Button(props: ButtonProps) {
    return (
        <button {...defaultProps} {...props}>
            {props.children}
        </button>
    );
}

export default Button;

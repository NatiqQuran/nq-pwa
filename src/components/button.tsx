import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // Custom Attributes
    isRounded: boolean;
}

// Custom Button Element
function Button(props: ButtonProps) {
    return (
        <button
            style={props.isRounded ? { borderRadius: "10px" } : {}}
            {...props}
        >
            <h1>hello</h1>
            <h2>{props.children}</h2>
        </button>
    );
}

export default Button;

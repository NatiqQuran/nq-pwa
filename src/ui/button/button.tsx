import React from "react";
import { joinClassNames } from "library";
import styles from "./button.module.css";
import SvgIcon from "ui/svgIcon/svgIcon";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: "text" | "outlined" | "filled" | "tonal" | "elevated";
    size?: "small" | "medium" | "large";
    icon?: JSX.Element;
}

interface svgSizeMap {
    small: number;
    medium: number;
    large: number;
}

const svgSizeMaps: svgSizeMap = {
    small: 2,
    medium: 2.4,
    large: 3,
};

function Button(props: ButtonProps) {
    const joinedClassNames = joinClassNames(
        styles.button,
        props.variant ? styles[props.variant] : styles.text,
        props.size ? styles[props.size] : styles.medium,
        props.icon && !props.children ? styles.iconButton : "",
        props.className!
    );

    return (
        <button {...props} className={joinedClassNames}>
            {props.icon ? (
                <SvgIcon
                    size={
                        props.size
                            ? svgSizeMaps[props.size]
                            : svgSizeMaps.medium
                    }
                >
                    {props.icon}
                </SvgIcon>
            ) : null}
            {props.children}
        </button>
    );
}

export default Button;

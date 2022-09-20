import { classnames } from "library";
import React from "react";
import styles from "./listItemButton.module.css";

interface ListItemButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: "filled" | "text";
}

function ListItemButton(props: ListItemButtonProps) {
    const variantStyle =
        props.variant === "filled"
            ? styles.listItemButtonFilled
            : styles.listItemButtonText;

    const classes = classnames(
        styles.listItemButton,
        variantStyle,
        props.className!
    );

    return (
        <button {...props} className={classes}>
            {props.children}
        </button>
    );
}

export default ListItemButton;

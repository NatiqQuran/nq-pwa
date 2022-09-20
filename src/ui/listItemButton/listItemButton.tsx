import { classnames } from "library";
import React from "react";
import styles from "./listItemButton.module.css";

interface ListItemButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

function ListItemButton(props: ListItemButtonProps) {
    const classes = classnames(styles.listItemButton, props.className!);

    return (
        <button {...props} className={classes}>
            {props.children}
        </button>
    );
}

export default ListItemButton;

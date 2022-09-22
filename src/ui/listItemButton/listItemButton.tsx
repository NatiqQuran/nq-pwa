import { joinClassNames } from "library";
import React from "react";
import styles from "./listItemButton.module.css";

interface ListItemButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

function ListItemButton(props: ListItemButtonProps) {
    const classNames = joinClassNames(styles.listItemButton, props.className!);

    return (
        <button {...props} className={classNames}>
            {props.children}
        </button>
    );
}

export default ListItemButton;

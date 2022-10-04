import { joinClassNames } from "library";
import React from "react";
import styles from "./listItemButton.module.css";

interface ListItemButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

function ListItemButton(props: ListItemButtonProps) {
    const joinedClassNames = joinClassNames(
        styles.listItemButton,
        props.className!
    );

    return (
        <button {...props} className={joinedClassNames}>
            {props.children}
        </button>
    );
}

export default ListItemButton;

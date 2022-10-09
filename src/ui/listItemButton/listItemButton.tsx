import React from "react";
import { joinClassNames } from "library";
import styles from "./listItemButton.module.css";

function ListItemButton(props: React.HTMLAttributes<HTMLButtonElement>) {
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

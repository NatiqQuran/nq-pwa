import { listenerCount } from "process";
import React from "react";
import styles from "./listItem.module.css";

function ListItem(props: React.HTMLAttributes<HTMLLIElement>) {
    return (
        <li className={styles.listItem} {...props}>
            {props.children}
        </li>
    );
}

export default ListItem;

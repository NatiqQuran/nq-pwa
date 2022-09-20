import React from "react";
import styles from "./list.module.css";
import { classnames } from "library";

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}

function List(props: ListProps) {
    const classes = classnames(styles.list, props.className!);
    return (
        <ul {...props} className={classes}>
            {props.children}
        </ul>
    );
}

export default List;
